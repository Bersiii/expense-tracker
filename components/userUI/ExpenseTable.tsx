"use client";

import React, { useMemo, useState } from "react";
import ExpensePagination from "./ExpensePagination";
import ExpenseFilters from "./ExpenseFilters";
import ExpenseList from "./ExpenseList";

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

    Transport: "bg-green-50 text-blue-500",

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
      <ExpenseFilters
        category={category}
        categories={categories}
        handleCategoryChange={handleCategoryChange}
      />
      <ExpenseList
        displayedExpenses={displayedExpenses}
        categoryColors={categoryColors}
        formatDate={formatDate}
        handleDelete={handleDelete}
      />

      <ExpensePagination
        totalExpenses={filteredExpenses.length}
        startIndex={startIndex}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ExpenseTable;
