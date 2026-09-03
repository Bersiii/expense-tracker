"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, PlusCircle } from "lucide-react";

const AddExpense = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          amount: Number(amount),
          category,
          description,
          date: date || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to add expense");
        return;
      }

      // Expense successfully created
      router.push("/user");
      router.refresh();
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f7f9]">
      {/* Page header */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="btn btn-ghost btn-circle"
        >
          <ArrowLeft size={20} />
        </button>

        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Add Expense</h1>

          <p className="mt-1 text-sm text-gray-500">
            Record a new expense and keep track of your spending.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-500">
                <PlusCircle size={21} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">Expense details</h2>

                <p className="text-sm text-gray-500">
                  Enter the information about your expense.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-6">
            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Expense title
              </label>

              <input
                type="text"
                placeholder="e.g. Lunch, Taxi, Shopping"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="input input-bordered w-full bg-white text-gray-900 placeholder:text-gray-400 focus:border-teal-400 focus:outline-none"
              />
            </div>

            {/* Amount + Category */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Amount */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Amount
                </label>

                <label className="input input-bordered flex w-full items-center gap-2 bg-white focus-within:border-teal-400">
                  <span className="text-gray-500">$</span>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="grow text-gray-900 outline-none"
                  />
                </label>
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="select select-bordered w-full bg-white text-gray-900 focus:border-teal-400 focus:outline-none"
                >
                  <option value="">Select category</option>
                  <option value="Food">Food</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Bills">Bills</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input input-bordered w-full bg-white text-gray-900 focus:border-teal-400 focus:outline-none"
              />

              <p className="mt-1 text-xs text-gray-400">
                Leave empty to use today's date.
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Description
                <span className="ml-1 text-gray-400">(optional)</span>
              </label>

              <textarea
                placeholder="Add some details about this expense..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="textarea textarea-bordered w-full resize-none bg-white text-gray-900 placeholder:text-gray-400 focus:border-teal-400 focus:outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => router.back()}
                className="btn btn-ghost"
                disabled={loading}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="btn border-none bg-gray-900 text-white hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Saving...
                  </>
                ) : (
                  <>
                    <PlusCircle size={18} />
                    Add Expense
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
