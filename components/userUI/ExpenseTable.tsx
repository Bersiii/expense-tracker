"use client";

import { Trash2 } from "lucide-react";
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

type ExpenseTableProps = {
  expense: Expense[];
};

const ExpenseTable = ({ expense }: ExpenseTableProps) => {
  const [category, setCategory] = useState("All Categories");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Categories
  const categories = [
    "All Categories",
    ...Array.from(new Set(expense.map((item) => item.category))),
  ];

  // Filter expenses
  const filteredExpenses = useMemo(() => {
    return expense.filter((item) => {
      const categoryMatch =
        category === "All Categories" || item.category === category;

      return categoryMatch;
    });
  }, [expense, category]);

  // Pagination
  const totalPages = Math.ceil(filteredExpenses.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const displayedExpenses = filteredExpenses.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Category colors
  const categoryColors: Record<string, string> = {
    Food: "bg-teal-50 text-teal-500",
    "Food & Dining": "bg-teal-50 text-teal-500",

    Transport: "bg-blue-50 text-blue-500",

    Shopping: "bg-green-50 text-green-500",

    Bills: "bg-purple-50 text-purple-500",

    Entertainment: "bg-yellow-50 text-yellow-600",
  };

  // Payment colors

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this expense?",
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`/api/expense?id=${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      console.log("DELETE STATUS:", response.status);
      console.log("DELETE RESPONSE:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete expense");
      }

      // Remove it from the page
      window.location.reload();
    } catch (error) {
      console.error("DELETE ERROR:", error);

      alert(
        error instanceof Error ? error.message : "Failed to delete expense",
      );
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* ================================
          FILTER BAR
      ================================= */}

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 p-4">
        <div className="flex flex-wrap gap-2">
          {/* Category */}
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 outline-none"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ================================
          TABLE
      ================================= */}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          {/* Header */}
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="w-12 px-4 py-3">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-gray-300"
                />
              </th>

              <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase text-gray-500">
                Expense
              </th>

              <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase text-gray-500">
                Category
              </th>

              <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase text-gray-500">
                Amount
              </th>

              <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase text-gray-500">
                Date ↕
              </th>

              <th className="px-4 py-3 text-center text-[10px] font-semibold uppercase text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {displayedExpenses.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-12 text-center text-sm text-gray-400"
                >
                  No expenses found.
                </td>
              </tr>
            ) : (
              displayedExpenses.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 transition hover:bg-gray-50"
                >
                  {/* Checkbox */}
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 rounded border-gray-300"
                    />
                  </td>

                  {/* Expense */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 text-sm">
                        {item.category === "Transport"
                          ? "🚗"
                          : item.category === "Shopping"
                            ? "🛍️"
                            : item.category === "Bills"
                              ? "💡"
                              : item.category === "Entertainment"
                                ? "🎬"
                                : "🍔"}
                      </div>

                      <div>
                        <p className="text-xs font-medium text-gray-800">
                          {item.title}
                        </p>

                        <p className="text-[10px] text-gray-400">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                        categoryColors[item.category] ||
                        "bg-gray-50 text-gray-500"
                      }`}
                    >
                      {item.category}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="px-4 py-3">
                    <span className="text-xs font-semibold text-red-500">
                      -$
                      {Number(item.amount).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-4 py-3 text-xs text-gray-600">
                    {formatDate(item.date)}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 text-center">
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="text-gray-400 transition hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================================
          FOOTER / PAGINATION
      ================================= */}

      <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
        <p className="text-[10px] text-gray-500">
          Showing {filteredExpenses.length === 0 ? 0 : startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, filteredExpenses.length)} of{" "}
          {filteredExpenses.length} expenses
        </p>

        <div className="flex items-center gap-1">
          {/* Previous */}
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-xs text-gray-500 disabled:opacity-40"
          >
            ‹
          </button>

          {/* Pages */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-7 w-7 items-center justify-center rounded-md border text-xs ${
                  currentPage === page
                    ? "border-teal-500 text-teal-500"
                    : "border-gray-200 text-gray-500"
                }`}
              >
                {page}
              </button>
            ),
          )}

          {/* Next */}
          <button
            type="button"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() =>
              setCurrentPage((page) => Math.min(page + 1, totalPages))
            }
            className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-xs text-gray-500 disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTable;
