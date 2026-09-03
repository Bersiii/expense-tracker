import React from "react";
import Header from "@/components/user-dashboard/header";
import Sidebar from "@/components/user-dashboard/sidebar";

const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <Header />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
