"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, PlusCircle,Receipt } from "lucide-react";
import CategoryDropdown from "@/components/userUI/CategoryDropdown";

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
    <div className="min-h-screen bg-[#f6f7f9] px-4 py-6 sm:px-6 lg:px-8">
      {" "}
      <div className="mx-auto max-w-5xl">
        {" "}
        {/* Page Header */}{" "}
        <div className="relative mb-7 overflow-hidden rounded-2xl bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 px-6 py-6 shadow-sm sm:px-8">
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 right-24 h-44 w-44 rounded-full bg-white/5" />

          <div className="relative flex items-center gap-4">
            

            {/* Header Content */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Add Expense
              </h1>

              <p className="mt-1 text-sm text-teal-100">
                Record a new expense and keep track of your spending.
              </p>
            </div>
          </div>
        </div>
        {/* Main Form Card */}{" "}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {" "}
          {/* Card Header */}{" "}
          <div className="border-b border-gray-100 bg-white px-6 py-6 sm:px-8">
            {" "}
            <div className="flex items-center gap-4">
              {" "}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                {" "}
                <Receipt size={21} strokeWidth={2} />{" "}
              </div>{" "}
              <div>
                {" "}
                <h2 className="text-base font-semibold text-slate-900">
                  {" "}
                  Expense details{" "}
                </h2>{" "}
                <p className="mt-0.5 text-sm text-gray-500">
                  {" "}
                  Enter the information about your expense.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Form */}{" "}
          <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
            {" "}
            {/* Error */}{" "}
            {error && (
              <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                {" "}
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />{" "}
                <p className="text-sm font-medium text-red-600">
                  {" "}
                  {error}{" "}
                </p>{" "}
              </div>
            )}{" "}
            {/* Expense Title */}{" "}
            <div>
              {" "}
              <label
                htmlFor="expense-title"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                {" "}
                Expense title{" "}
              </label>{" "}
              <input
                id="expense-title"
                type="text"
                placeholder="e.g. Lunch, Taxi, Shopping"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
              />{" "}
            </div>{" "}
            {/* Amount + Category */}{" "}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {" "}
              {/* Amount */}{" "}
              <div>
                {" "}
                <label
                  htmlFor="expense-amount"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  {" "}
                  Amount{" "}
                </label>{" "}
                <div className="flex h-11 items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-50">
                  {" "}
                  <span className="flex h-full items-center border-r border-gray-100 bg-gray-50 px-3 text-sm font-medium text-gray-500">
                    {" "}
                    ${" "}
                  </span>{" "}
                  <input
                    id="expense-amount"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="h-full w-full bg-transparent px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                  />{" "}
                </div>{" "}
              </div>{" "}
              {/* Category */}{" "}
              <div>
                {" "}
                <label
                  htmlFor="expense-category"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  {" "}
                  Category{" "}
                </label>{" "}
                <CategoryDropdown
                  category={category}
                  setCategory={setCategory}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* Date */}{" "}
            <div>
              {" "}
              <label
                htmlFor="expense-date"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                {" "}
                Date{" "}
              </label>{" "}
              <input
                id="expense-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm outline-none transition-all hover:border-gray-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
              />{" "}
              <p className="mt-2 text-xs text-gray-400">
                {" "}
                Leave empty to use today's date.{" "}
              </p>{" "}
            </div>{" "}
            {/* Description */}{" "}
            <div>
              {" "}
              <label
                htmlFor="expense-description"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                {" "}
                Description{" "}
                <span className="ml-1 font-normal text-gray-400">
                  {" "}
                  (optional){" "}
                </span>{" "}
              </label>{" "}
              <textarea
                id="expense-description"
                placeholder="Add some details about this expense..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
              />{" "}
            </div>{" "}
            {/* Buttons */}{" "}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
              {" "}
              {/* Cancel */}{" "}
              <button
                type="button"
                onClick={() => router.back()}
                disabled={loading}
                className="h-11 rounded-xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {" "}
                Cancel{" "}
              </button>{" "}
              {/* Submit */}{" "}
              <button
                type="submit"
                disabled={loading}
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-800 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {" "}
                {loading ? (
                  <>
                    {" "}
                    <span className="loading loading-spinner loading-sm" />{" "}
                    Saving...{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <PlusCircle size={18} /> Add Expense{" "}
                  </>
                )}{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
        {/* Bottom Hint */}{" "}
        <p className="mt-5 text-center text-xs text-gray-400">
          {" "}
          Keep your expenses organized to better understand your spending
          habits.{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default AddExpense;
