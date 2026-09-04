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
