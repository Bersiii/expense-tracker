"use client";

import { User, Mail, ShieldCheck } from "lucide-react";

type ProfileSettingsProps = {
  name: string;
  email: string;
};

const ProfileSettings = ({ name, email }: ProfileSettingsProps) => {
  return (
    <section>
     

      {/* Main Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Fancy Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 px-6 py-8 sm:px-8">
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 right-20 h-44 w-44 rounded-full bg-white/5" />

          <div className="relative flex items-center gap-4">
            {/* Avatar */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-sm">
              <User size={30} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-medium text-teal-100">
                Account Profile
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {name || "Your Profile"}
              </h3>

              <div className="mt-1 flex items-center gap-1.5 text-sm text-teal-100">
                <Mail size={14} />
                <span>{email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">
                Profile Information
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Your personal account details.
              </p>
            </div>

            {/* Verified badge */}
            <div className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-600 sm:flex">
              <ShieldCheck size={14} />
              Verified
            </div>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Name */}
            <div className="group rounded-xl border border-gray-200 bg-gray-50/70 p-4 transition-all duration-200 hover:border-teal-200 hover:bg-teal-50/40 hover:shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm ring-1 ring-gray-100 transition-colors group-hover:bg-teal-100">
                  <User size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Full Name
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-gray-900">
                    {name || "Not available"}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group rounded-xl border border-gray-200 bg-gray-50/70 p-4 transition-all duration-200 hover:border-teal-200 hover:bg-teal-50/40 hover:shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm ring-1 ring-gray-100 transition-colors group-hover:bg-teal-100">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Email Address
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-gray-900">
                    {email || "Not available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSettings;
