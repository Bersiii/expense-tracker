"use client";

import React, { useState } from "react";
import Logo from "@/components/logo/logo";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      // Registration successful
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
            <div className="mb-7 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Create your account
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Start managing your money smarter today.
              </p>
            </div>

            {/* Error */}
            {error && (
              <p className="mb-4 text-center text-sm text-red-500">{error}</p>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="input input-sm w-full border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email address
                </label>

                <input
                  type="email"
                  autoComplete="off"
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
                  autoComplete="new-password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input input-sm w-full border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 accent-teal-500"
                />

                <p className="text-xs leading-5 text-gray-500">
                  I agree to{" "}
                  <Link
                    href="/terms"
                    className="text-teal-500 hover:text-teal-600"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-teal-500 hover:text-teal-600"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-teal-600 py-3 text-sm font-medium text-white transition hover:bg-[#115E59] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-teal-500 hover:bg-[#cbcacf]"
              >
                Log in
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

export default Register;
