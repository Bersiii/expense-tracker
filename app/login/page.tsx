"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/logo/logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // Login successful
      router.push("/user");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="w-full max-w-md">
        <Logo />

        <div
          className="card w-96 bg-base-100 bg-cover bg-center shadow-sm"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          <div className="card-body">
            {/* Heading */}
            <div className="mb-7 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Welcome back
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Sign in to manage your money smarter.
              </p>
            </div>

            {error && (
              <p className="mb-4 text-center text-sm text-red-500">{error}</p>
            )}

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input input-sm w-full border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-100"
                />
              </div>
              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input input-sm w-full border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Remember + Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 accent-teal-500" />

                  <span className="text-xs text-gray-500">Remember me</span>
                </label>

                <a
                  href="/forgot-password"
                  className="text-xs font-medium text-teal-500 hover:text-teal-600"
                >
                  Forgot password?
                </a>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gray-900 py-3 text-sm font-medium text-white transition  text-white transition hover:bg-[#cbcacf] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>

            {/* Register */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-medium text-teal-500 hover:bg-[#cbcacf]"
              >
                Create account
              </a>
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Take control of your money with Montra.
        </p>
      </div>
    </main>
  );
};

export default Login;
