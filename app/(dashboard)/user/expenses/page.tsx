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
      <h1 className="mb-1 text-2xl font-bold text-gray-900">Expenses</h1>

      <p className="mb-6 text-sm text-gray-500">
        Track and manage all your expenses in one place.
      </p>

      <ExpenseTable expense={expense} />
    </div>
  );
};

export default Expenses;
