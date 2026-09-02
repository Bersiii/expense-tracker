import React from "react";
import Header from "@/components/Header";

const Page = () => {
  return (
    <div
      className="min-h-screen bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <Header />
    </div>
  );
};

export default Page;
