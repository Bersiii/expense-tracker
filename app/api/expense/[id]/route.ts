import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

// GET /api/expenses/:id
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const expenseId = Number(id);

    const expense = await prisma.expense.findFirst({
      where: {
        id: expenseId,
        userId: currentUser.userId,
      },
    });

    if (!expense) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 });
    }

    return NextResponse.json(expense);
  } catch (error) {
    console.error("Get expense error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

// PUT /api/expenses/:id
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const expenseId = Number(id);

    const existingExpense = await prisma.expense.findFirst({
      where: {
        id: expenseId,
        userId: currentUser.userId,
      },
    });

    if (!existingExpense) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 });
    }

    const body = await request.json();

    const { title, amount, category, description, date } = body;

    if (!title || amount === undefined || !category) {
      return NextResponse.json(
        {
          error: "Title, amount, and category are required",
        },
        { status: 400 },
      );
    }

    const updatedExpense = await prisma.expense.update({
      where: {
        id: expenseId,
      },
      data: {
        title,
        amount: Number(amount),
        category,
        description: description || null,
        date: date ? new Date(date) : existingExpense.date,
      },
    });

    return NextResponse.json(updatedExpense);
  } catch (error) {
    console.error("Update expense error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

// DELETE /api/expenses/:id
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const expenseId = Number(id);

    const existingExpense = await prisma.expense.findFirst({
      where: {
        id: expenseId,
        userId: currentUser.userId,
      },
    });

    if (!existingExpense) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 });
    }

    await prisma.expense.delete({
      where: {
        id: expenseId,
      },
    });

    return NextResponse.json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    console.error("Delete expense error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
