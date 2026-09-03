import React from "react";

import Header from "@/components/userUI/Header"; // Adjust import path as needed

import Sidebar from "@/components/userUI/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-gray-50">
      {/* Toggle input for mobile drawer responsiveness */}
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* 1. Main Content Wrapper (Includes Header + Page Content) */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Fixed or sticky Header at the top */}
        <div className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-md py-4 px-6 border-b border-gray-200">
          <Header />
        </div>

        {/* Dynamic page contents are injected here */}
        <main className="flex-1 p-8 max-w-[1200px] w-full mx-auto">
          {children}
        </main>
      </div>

      {/* 2. Sidebar Area (Locks to the left on large screens) */}
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Your Sidebar component */}
        <Sidebar />
      </div>
    </div>
  );
}
