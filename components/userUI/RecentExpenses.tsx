"use client";

import React from "react";

type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
  description: string | null;
  date: string;
  userId: number;
};

type RecentExpensesProps = {
  expense: Expense[];
};

const RecentExpenses = ({ expense }: RecentExpensesProps) => {
  const recentExpenses = [...expense]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const categoryColors: Record<string, string> = {
    Food: "bg-orange-50 text-orange-500",
    "Food & Dining": "bg-orange-50 text-orange-500",
    Transport: "bg-blue-50 text-blue-500",
    Shopping: "bg-green-50 text-green-500",
    Bills: "bg-purple-50 text-purple-500",
    Entertainment: "bg-yellow-50 text-yellow-600",
  };

  const categoryIcons: Record<string, string> = {
    Food: "🍔",
    "Food & Dining": "🍔",
    Transport: "🚗",
    Shopping: "🛍️",
    Bills: "💡",
    Entertainment: "🎬",
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900">Recent Expenses</h2>

        <button
          className="text-xs font-medium text-gray-500 hover:text-orange-500"
          type="button"
        >
          View all →
        </button>
      </div>

      {/* Empty state */}
      {recentExpenses.length === 0 ? (
        <div className="flex h-32 items-center justify-center">
          <p className="text-sm text-gray-400">No expenses yet.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {recentExpenses.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg px-2 py-3 hover:bg-gray-50"
            >
              {/* Expense information */}
              <div className="flex min-w-0 items-center gap-3">
                {/* Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-50">
                  <span className="text-sm">
                    {categoryIcons[item.category] || "💰"}
                  </span>
                </div>

                {/* Title + date */}
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-gray-800">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400">
                    {formatDate(item.date)}
                  </p>
                </div>
              </div>

              {/* Category + Amount */}
              <div className="flex items-center gap-6">
                <span
                  className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                    categoryColors[item.category] || "bg-gray-50 text-gray-500"
                  }`}
                >
                  {item.category}
                </span>

                <span className="w-20 text-right text-xs font-semibold text-red-500">
                  -$
                  {Number(item.amount).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentExpenses;
