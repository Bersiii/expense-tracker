"use client";

import React, { useMemo, useState } from "react";

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

/* =========================================================
   SPENDING OVERVIEW
========================================================= */

export const SpendingOverview = ({ expense }: Props) => {
  const [period, setPeriod] = useState("This week");

  const chartData = useMemo(() => {
    const today = new Date();
    const days = [];

    // Last 7 days
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const total = expense
        .filter((item) => {
          const expenseDate = new Date(item.date);

          return (
            expenseDate.getDate() === date.getDate() &&
            expenseDate.getMonth() === date.getMonth() &&
            expenseDate.getFullYear() === date.getFullYear()
          );
        })
        .reduce((sum, item) => sum + Number(item.amount), 0);

      days.push({
        day: date.toLocaleDateString("en-US", {
          weekday: "short",
        }),
        amount: total,
      });
    }

    return days;
  }, [expense]);

  const maxAmount = Math.max(...chartData.map((item) => item.amount), 100);

  /*
    Convert data into SVG points.
  */
  const width = 650;
  const height = 230;
  const paddingX = 35;
  const paddingY = 25;

  const points = chartData.map((item, index) => {
    const x =
      paddingX + (index * (width - paddingX * 2)) / (chartData.length - 1);

    const y =
      height - paddingY - (item.amount / maxAmount) * (height - paddingY * 2);

    return {
      x,
      y,
      amount: item.amount,
    };
  });

  const linePath = points
    .map((point, index) =>
      index === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`,
    )
    .join(" ");

  const areaPath = `
    ${linePath}
    L ${points[points.length - 1].x} ${height - paddingY}
    L ${points[0].x} ${height - paddingY}
    Z
  `;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Spending overview
          </h2>

          <p className="mt-1 text-xs text-gray-400">Your spending activity</p>
        </div>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 outline-none"
        >
          <option>This week</option>
          <option>This month</option>
          <option>This year</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-[230px] w-full"
          preserveAspectRatio="none"
        >
          {/* Horizontal grid lines */}
          {[0, 1, 2, 3, 4].map((line) => {
            const y = paddingY + (line * (height - paddingY * 2)) / 4;

            return (
              <line
                key={line}
                x1={paddingX}
                y1={y}
                x2={width - paddingX}
                y2={y}
                stroke="#ccfbf1"
                strokeWidth="1"
              />
            );
          })}

          {/* Gradient area */}
          <defs>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.28" />

              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Area */}
          <path d={areaPath} fill="url(#expenseGradient)" />

          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#14b8a6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#14b8a6"
              stroke="white"
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* Days */}
        <div className="flex justify-between px-7 text-[10px] text-gray-400">
          {chartData.map((item, index) => (
            <span key={index}>{item.day}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   EXPENSE BY CATEGORY
========================================================= */

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

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default SpendingOverview;
