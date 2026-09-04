"use client";

import React, { useMemo } from "react";

type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
  description: string | null;
  date: string;
  userId: number;
};

type ExpenseInsightsProps = {
  expense: Expense[];
};

const ExpenseInsights = ({ expense }: ExpenseInsightsProps) => {
  // Find the largest expense
  const largestExpense = useMemo(() => {
    if (expense.length === 0) {
      return null;
    }

    return expense.reduce((largest, current) =>
      Number(current.amount) > Number(largest.amount) ? current : largest,
    );
  }, [expense]);

  // Total expenses
  const totalExpense = useMemo(() => {
    return expense.reduce((total, item) => total + Number(item.amount), 0);
  }, [expense]);

  // Number of transactions
  const transactions = expense.length;

  // Average expense
  const averageExpense = transactions > 0 ? totalExpense / transactions : 0;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {/*LARGEST EXPENSE*/}

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-900">Largest Expense</h2>

        {largestExpense ? (
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700">
              {largestExpense.title}
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              $
              {Number(largestExpense.amount).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>

            <p className="mt-2 text-xs text-gray-400">
              {largestExpense.category}
            </p>
          </div>
        ) : (
          <div className="mt-6">
            <p className="text-sm text-gray-400">No expenses yet.</p>
          </div>
        )}
      </div>

      {/* EXPENSE SUMMARY */}

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-900">Expense Summary</h2>

        <div className="mt-6 space-y-4">
          {/* Total */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Total:</span>

            <span className="text-sm font-semibold text-gray-900">
              $
              {totalExpense.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          {/* Transactions */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Transactions:</span>

            <span className="text-sm font-semibold text-gray-900">
              {transactions}
            </span>
          </div>

          {/* Average */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Average:</span>

            <span className="text-sm font-semibold text-gray-900">
              $
              {averageExpense.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInsights;
