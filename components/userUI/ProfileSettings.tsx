"use client";

import React from "react";
import { User, Mail } from "lucide-react";

type ProfileSettingsProps = {
  name: string;
  email: string;
};

const ProfileSettings = ({ name, email }: ProfileSettingsProps) => {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Profile</h2>

      <div className="rounded-xl border border-gray-200 bg-white">
        {/* Header */}
        <div className="border-b border-gray-100 p-6">
          <h3 className="font-medium text-gray-900">Profile Information</h3>

          <p className="mt-1 text-sm text-gray-500">
            Your personal account information.
          </p>
        </div>

        {/* Name and Email */}
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Name
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5">
              <User size={18} className="text-gray-400" />

              <span className="text-sm text-gray-900">{name}</span>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5">
              <Mail size={18} className="text-gray-400" />

              <span className="text-sm text-gray-900">{email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSettings;
