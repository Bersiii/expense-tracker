import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function PUT(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        {
          error: "Current password and new password are required",
        },
        { status: 400 },
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        {
          error: "New password must be at least 6 characters",
        },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id: currentUser.userId,
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check current password
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Current password is incorrect" },
        { status: 400 },
      );
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Change password error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
