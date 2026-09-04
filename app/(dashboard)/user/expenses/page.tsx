"use client";

import React, { useEffect, useState } from "react";
import ExpenseTable from "@/components/userUI/ExpenseTable";

type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
  description: string | null;
  date: string;
  userId: number;
};

const Expenses = () => {
  const [expense, setExpense] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await fetch("/api/expense");

        if (!response.ok) {
          throw new Error("Failed to fetch expenses");
        }

        const data = await response.json();

        setExpense(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpense();
  }, []);

  return (
    <div className="p-6">
      <div className="relative mb-7 overflow-hidden rounded-2xl bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 px-6 py-6 shadow-sm sm:px-8">
        {/* Decorative circles */}
        <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 right-24 h-44 w-44 rounded-full bg-white/5" />

        {/* Content */}
        <div className="relative">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Expenses
          </h1>

          <p className="mt-1 text-sm text-teal-100">
            Track and manage all your expenses in one place.
          </p>
        </div>
      </div>

      <ExpenseTable expense={expense} />
    </div>
  );
};

export default Expenses;
