"use client";

import React from "react";
import { Save } from "lucide-react";

type SettingsHeaderProps = {
  onSave?: () => void;
};

const SettingsHeader = ({ onSave }: SettingsHeaderProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your account and application preferences
          </p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="mt-6 border-b border-gray-200" />
    </div>
  );
};

export default SettingsHeader;
