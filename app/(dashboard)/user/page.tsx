"use client";

import React, { useEffect, useState } from "react";
import { ExpenseByCategory } from "@/components/userUI/ExpenseBycategory";
import { SpendingOverview } from "@/components/userUI/SpendingOverview";
import RecentExpenses from "@/components/userUI/RecentExpenses";
import ExpenseInsights from "@/components/userUI/ExpenseInsights";
import SummaryCards from "@/components/userUI/SummaryCarde";

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
      <SummaryCards
        averageExpense={averageExpense}
        transactions={transactions}
        thisMonth={thisMonth}
        totalExpense={totalExpense}
      />

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
