import React from "react";
import Header from "@/components/userUI/Header";
import Sidebar from "@/components/userUI/Sidebar";

const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <Header />
      <div className="flex min-h-screen bg-[#f6f7f9]">
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* RIGHT SIDE */}
        
      </div>
    </div>
  );
};

export default Dashboard;
