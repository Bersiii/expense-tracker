"use client";

import React, { useEffect, useState } from "react";
import CategoriesHeader from "@/components/userUI/CategoriesHeader";

type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
  description: string | null;
  date: string;
  userId: number;
};

const CategoriesPage = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch expenses
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch("/api/expense");

        if (!response.ok) {
          throw new Error("Failed to fetch expenses");
        }

        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  // Calculate category data
  const categoryData = expenses.reduce(
    (acc, expense) => {
      const category = expense.category || "Other";

      if (!acc[category]) {
        acc[category] = {
          amount: 0,
          transactions: 0,
        };
      }

      acc[category].amount += Number(expense.amount);
      acc[category].transactions += 1;

      return acc;
    },
    {} as Record<
      string,
      {
        amount: number;
        transactions: number;
      }
    >,
  );

  const categories = Object.entries(categoryData);

  const totalSpent = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0,
  );

  const highestCategory =
    categories.length > 0
      ? categories.reduce((highest, current) =>
          current[1].amount > highest[1].amount ? current : highest,
        )
      : null;

  // Search categories
  const filteredCategories = categories.filter(([category]) =>
    category.toLowerCase().includes(search.toLowerCase()),
  );

  // Add category button
  const handleAddCategory = () => {
    console.log("Add category clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <CategoriesHeader onAddCategory={handleAddCategory} />

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center py-20">
          <p className="text-gray-500">Loading categories...</p>
        </div>
      ) : (
        <>
          {/* Statistics */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Total Categories */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-sm text-gray-500">Total Categories</p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {categories.length}
              </h2>
            </div>

            {/* Total Spent */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-sm text-gray-500">Total Spent</p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                ${totalSpent.toFixed(2)}
              </h2>
            </div>

            {/* Highest Category */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-sm text-gray-500">Highest Category</p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {highestCategory ? highestCategory[0] : "No data"}
              </h2>

              {highestCategory && (
                <p className="mt-1 text-sm text-gray-500">
                  ${highestCategory[1].amount.toFixed(2)}
                </p>
              )}
            </div>
          </div>

          {/* Search */}
          <div className="mt-8 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Spending Categories
            </h2>

            <input
              type="text"
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:border-gray-400"
            />
          </div>

          {/* Categories */}
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
            {filteredCategories.length === 0 ? (
              <div className="p-10 text-center">
                <p className="text-gray-500">No categories found.</p>
              </div>
            ) : (
              filteredCategories
                .sort((a, b) => b[1].amount - a[1].amount)
                .map(([category, data]) => {
                  const percentage =
                    totalSpent > 0 ? (data.amount / totalSpent) * 100 : 0;

                  return (
                    <div
                      key={category}
                      className="border-b border-gray-100 p-5 last:border-b-0"
                    >
                      <div className="flex items-center justify-between">
                        {/* Category name */}
                        <div className="flex items-center gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-xl">
                            {getCategoryIcon(category)}
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {category}
                            </h3>

                            <p className="text-sm text-gray-500">
                              {data.transactions}{" "}
                              {data.transactions === 1
                                ? "transaction"
                                : "transactions"}
                            </p>
                          </div>
                        </div>

                        {/* Amount */}
                        <div className="text-right">
                          <p className="font-semibold text-teal-900">
                            ${data.amount.toFixed(2)}
                          </p>

                          <p className="text-sm text-gray-500">
                            {percentage.toFixed(1)}%
                          </p>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-4 h-2 w-full rounded-full bg-teal-100">
                        <div
                          className="h-2 rounded-full bg-teal-500 transition-all"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoriesPage;

// Category icons
function getCategoryIcon(category: string) {
  const name = category.toLowerCase();

  if (name.includes("food")) return "🍔";
  if (name.includes("transport")) return "🚌";
  if (name.includes("shopping")) return "🛍️";
  if (name.includes("bill")) return "💡";
  if (name.includes("utility")) return "💡";
  if (name.includes("house")) return "🏠";
  if (name.includes("rent")) return "🏠";
  if (name.includes("entertainment")) return "🎬";
  if (name.includes("health")) return "❤️";
  if (name.includes("education")) return "📚";
  if (name.includes("travel")) return "✈️";

  return "📦";
}
