"use client";

import React, { useMemo} from "react";

type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
  description: string | null;
  date: string;
  userId: number;
};

type Props = {
  expense: Expense[];
};




export const ExpenseByCategory = ({ expense }: Props) => {
  const categories = useMemo(() => {
    const categoryMap: Record<string, number> = {};

    expense.forEach((item) => {
      const category = item.category || "Other";

      categoryMap[category] =
        (categoryMap[category] || 0) + Number(item.amount);
    });

    const total = Object.values(categoryMap).reduce(
      (sum, amount) => sum + amount,
      0,
    );

    return Object.entries(categoryMap)
      .map(([name, amount]) => ({
        name,
        amount,
        percentage: total > 0 ? (amount / total) * 100 : 0,
      }))
      .sort((a, b) => b.amount - a.amount);
  }, [expense]);

  const totalExpense = categories.reduce(
    (sum, category) => sum + category.amount,
    0,
  );

  // Colors for the donut
  const colors = [
    "#14b8a6",
    "#4f8df7",
    "#48c78e",
    "#a78bfa",
    "#f5b942",
    "#ef6c8f",
    "#94a3b8",
  ];

  /*
    Create donut segments using conic-gradient.
  */
  const gradient = useMemo(() => {
    if (categories.length === 0) {
      return "#e5e7eb 0% 100%";
    }

    let current = 0;

    const parts = categories.map((category, index) => {
      const start = current;

      current += category.percentage;

      return `${colors[index % colors.length]} ${start}% ${current}%`;
    });

    return parts.join(", ");
  }, [categories]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Expenses by category
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Where your money is going
          </p>
        </div>

        <select className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 outline-none">
          <option>This month</option>
          <option>This week</option>
          <option>This year</option>
        </select>
      </div>

      <div className="flex items-center gap-6">
        {/* Donut */}
        <div className="relative flex h-40 w-40 shrink-0 items-center justify-center">
          <div
            className="h-36 w-36 rounded-full"
            style={{
              background: `conic-gradient(${gradient})`,
            }}
          />

          {/* White center */}
          <div className="absolute flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white">
            <span className="text-xs text-gray-400">Total</span>

            <span className="mt-1 text-sm font-bold text-gray-900">
              $
              {totalExpense.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          {categories.length === 0 ? (
            <p className="text-xs text-gray-400">No expenses yet.</p>
          ) : (
            categories.slice(0, 6).map((category, index) => (
              <div
                key={category.name}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{
                      backgroundColor: colors[index % colors.length],
                    }}
                  />

                  <span className="truncate text-xs text-gray-600">
                    {category.name}
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                  <span className="text-xs font-medium text-gray-800">
                    $
                    {category.amount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>

                  <span className="text-[10px] text-gray-400">
                    ({category.percentage.toFixed(0)}%)
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};




