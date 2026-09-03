"use client";

import React, { useEffect, useState } from "react";
import {
  SpendingOverview,
  ExpenseByCategory,
} from "@/components/userUI/overview";
import RecentExpenses from "@/components/userUI/RecentExpenses";
import ExpenseInsights from "@/components/userUI/ExpenseInsights";

type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
  description: string | null;
  date: string;
  userId: number;
};

const Overview = () => {
  const [expense, setExpense] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await fetch("/api/expense");

        const text = await response.text();

        console.log("STATUS:", response.status);
        console.log("RESPONSE:", text);

        if (!response.ok) {
          throw new Error("Failed to fetch expense");
        }

        const data = JSON.parse(text);
        setExpense(data);
      } catch (error) {
        console.error("Error fetching expense:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpense();
  }, []);

  // Total expense
  const totalExpense = expense.reduce(
    (total, expense) => total + Number(expense.amount),
    0,
  );

  // Current month
  const now = new Date();

  const thisMonthExpense = expense.filter((expense) => {
    const expenseDate = new Date(expense.date);

    return (
      expenseDate.getMonth() === now.getMonth() &&
      expenseDate.getFullYear() === now.getFullYear()
    );
  });

  const thisMonth = thisMonthExpense.reduce(
    (total, expense) => total + Number(expense.amount),
    0,
  );

  // Number of transactions
  const transactions = expense.length;

  // Average expense
  const averageExpense = transactions > 0 ? totalExpense / transactions : 0;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Expense */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Total Expenses</p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            ${totalExpense.toFixed(2)}
          </h2>

          <p className="mt-1 text-xs text-gray-400">All your expenses</p>
        </div>

        {/* This Month */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">This Month</p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            ${thisMonth.toFixed(2)}
          </h2>

          <p className="mt-1 text-xs text-gray-400">Spending this month</p>
        </div>

        {/* Transactions */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Transactions</p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            {transactions}
          </h2>

          <p className="mt-1 text-xs text-gray-400">Total transactions</p>
        </div>

        {/* Average */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Average Expense</p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            ${averageExpense.toFixed(2)}
          </h2>

          <p className="mt-1 text-xs text-gray-400">Per transaction</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <SpendingOverview expense={expense} />
        </div>

        <div className="lg:col-span-2">
          <ExpenseByCategory expense={expense} />
        </div>
      </div>
      <RecentExpenses expense={expense} />
      <ExpenseInsights expense={expense} />
    </div>
  );
};

export default Overview;
