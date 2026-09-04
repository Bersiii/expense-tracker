import React from "react";
import Header from "@/components/userUI/Header";
import Sidebar from "@/components/userUI/Sidebar";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  const user = currentUser
    ? await prisma.user.findUnique({
        where: {
          id: currentUser.userId,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      })
    : null;
  return (
    <div
      className="min-h-screen bg-white"
      
    >
      <Sidebar />
      <div className="lg:ml-64">
        <Header name={user?.name || ""} email={user?.email || ""} />
        <main className="px-6 py-6">{children}</main>
      </div>
    </div>
  );
}
