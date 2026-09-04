"use client";

import {
  BarChart3,
  PieChart,
  Wallet,
  TrendingUp,
  ShieldCheck,
  Filter,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function LearnMorePage() {
  const features = [
    {
      icon: Wallet,
      title: "Track Your Expenses",
      description:
        "Easily record your daily expenses and keep all your spending information organized in one place.",
    },
    {
      icon: PieChart,
      title: "Understand Your Spending",
      description:
        "See exactly where your money goes with category-based spending statistics and visual insights.",
    },
    {
      icon: BarChart3,
      title: "View Spending Overview",
      description:
        "Get a clear overview of your total expenses, transactions, and monthly spending activity.",
    },
    {
      icon: TrendingUp,
      title: "Monitor Your Progress",
      description:
        "Keep track of your spending habits and make better financial decisions over time.",
    },
    {
      icon: Filter,
      title: "Organize Easily",
      description:
        "Filter and organize your expenses by categories so you can quickly find the information you need.",
    },
    {
      icon: ShieldCheck,
      title: "Keep Everything Organized",
      description:
        "Manage your financial records from a simple and easy-to-use dashboard.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
            <Wallet size={28} />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Take Control of Your <span className="text-teal-500">Expenses</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            A simple expense tracking platform that helps you understand your
            spending, organize your finances, and make smarter financial
            decisions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="btn border-none bg-teal-500 px-6 text-white hover:bg-teal-600"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
