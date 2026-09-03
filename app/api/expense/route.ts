import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

// GET /api/expenses
export async function GET() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const expenses = await prisma.expense.findMany({
      where: {
        userId: currentUser.userId,
      },
      orderBy: {
        date: "desc",
      },
    });

    return NextResponse.json(expenses);
  } catch (error) {
    console.error("Get expenses error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

// POST /api/expenses
export async function POST(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

    const expense = await prisma.expense.create({
      data: {
        title,
        amount: Number(amount),
        category,
        description: description || null,
        date: date ? new Date(date) : new Date(),
        userId: currentUser.userId,
      },
    });

    return NextResponse.json(expense, { status: 201 });
  } catch (error) {
    console.error("Create expense error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}


// DELETE /api/expense?id=6
export async function DELETE(request: NextRequest) {
  try {
    // Get currently logged-in user
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get expense ID from URL
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Expense ID is required" },
        { status: 400 }
      );
    }

    const expenseId = Number(id);

    if (isNaN(expenseId)) {
      return NextResponse.json(
        { error: "Invalid expense ID" },
        { status: 400 }
      );
    }

    // Find the expense AND make sure it belongs to this user
    const expense = await prisma.expense.findFirst({
      where: {
        id: expenseId,
        userId: currentUser.userId,
      },
    });

    if (!expense) {
      return NextResponse.json(
        { error: "Expense not found" },
        { status: 404 }
      );
    }

    // Delete the expense
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
      { status: 500 }
    );
  }
}