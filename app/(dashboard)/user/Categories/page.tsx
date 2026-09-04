"use client";

import React, { useEffect, useState } from "react";
import CategoriesHeader from "@/components/userUI/CategoriesHeader";
import CategoryStatistics from "@/components/userUI/CategoryStatistics";
import CategoryList from "@/components/userUI/CategoryList";

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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <CategoriesHeader />

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center py-20">
          <p className="text-gray-500">Loading categories...</p>
        </div>
      ) : (
        <>
          {/* Statistics */}
          <CategoryStatistics
            categories={categories}
            totalSpent={totalSpent}
            highestCategory={highestCategory}
          />

          {/* Search */}
          <div className="mt-8 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Spending Categories
            </h2>

            
          </div>

          {/* Categories */}
          <CategoryList
            filteredCategories={filteredCategories}
            totalSpent={totalSpent}
            getCategoryIcon={getCategoryIcon}
          />
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
