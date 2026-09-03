import React from "react";
import Header from "@/components/userUI/Header";
import Sidebar from "@/components/userUI/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f6f7f9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Right side */}
      <div className="lg:ml-64">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="px-6 py-6">{children}</main>
      </div>
    </div>
  );
}
