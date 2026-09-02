"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
      router.push("/login");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          
            <Image
              src="/logo.png"
              alt="Montra logo"
              width={30}
              height={30}
              className="object-contain"
            />

            <span className="text-xl font-semibold tracking-tight text-gray-900">
              Montra
            </span>
         
        </div>

        <div
          className="card w-96 bg-base-100 bg-cover bg-center shadow-sm"
          style={{ backgroundImage: "url('/bg.png')" }}
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
                  className="input input-sm w-full border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>

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
                  className="input input-sm w-full border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input input-sm w-full border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 accent-orange-500"
                />

                <p className="text-xs leading-5 text-gray-500">
                  I agree to{" "}
                  <a href="#" className="text-orange-500 hover:text-orange-600">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-orange-500 hover:text-orange-600">
                    Privacy Policy
                  </a>
                </p>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gray-900 py-3 text-sm font-medium text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-orange-500 hover:text-orange-600"
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
