"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

const PasswordSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("New password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/user/password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Failed to change password.");
        return;
      }

      setMessage("Password changed successfully.");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      

      {/* Main Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Fancy Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-teal-800 px-6 py-7 sm:px-8">
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-24 right-28 h-48 w-48 rounded-full bg-teal-400/10" />

          <div className="relative flex items-center gap-4">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-sm">
              <ShieldCheck size={27} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-medium text-teal-200">
                Account Security
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                Change your password
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                Protect your account with a strong password.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleChangePassword} className="p-6 sm:p-8">
          <div className="max-w-2xl">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900">
                Password Information
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Enter your current password and choose a new one.
              </p>
            </div>

            <div className="space-y-5">
              {/* Current Password */}
              <div>
                <label
                  htmlFor="current-password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Current Password
                </label>

                <div className="group relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-teal-600"
                  />

                  <input
                    id="current-password"
                    type={showCurrent ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter your current password"
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-12 text-sm text-gray-900 shadow-sm outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50"
                  />

                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-teal-600"
                    aria-label={
                      showCurrent
                        ? "Hide current password"
                        : "Show current password"
                    }
                  >
                    {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label
                  htmlFor="new-password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  New Password
                </label>

                <div className="group relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-teal-600"
                  />

                  <input
                    id="new-password"
                    type={showNew ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter your new password"
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-12 text-sm text-gray-900 shadow-sm outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50"
                  />

                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-teal-600"
                    aria-label={
                      showNew ? "Hide new password" : "Show new password"
                    }
                  >
                    {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Your password must contain at least 6 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Confirm New Password
                </label>

                <div className="group relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-teal-600"
                  />

                  <input
                    id="confirm-password"
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your new password"
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-12 text-sm text-gray-900 shadow-sm outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-teal-600"
                    aria-label={
                      showConfirm
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Message */}
            {message && (
              <div
                className={`mt-5 rounded-xl border px-4 py-3 text-sm font-medium ${
                  message === "Password changed successfully."
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-600"
                }`}
              >
                {message}
              </div>
            )}

            {/* Footer */}
            <div className="mt-7 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={15} />
                <span>Your password is securely protected.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-teal-700 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-800 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="loading loading-spinner loading-sm" />
                    Changing...
                  </span>
                ) : (
                  "Change Password"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PasswordSettings;
