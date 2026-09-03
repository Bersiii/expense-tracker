"use client";

import React from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";


type ProfileSettingsProps = {
  name: string;
  email: string;
};

const Header = ({ name, email }: ProfileSettingsProps) => {
  return (
    <header className="sticky top-0 z-30 px-6 pt-0">
      <div className="flex h-[64px] items-center justify-between rounded-2xl border border-gray-200  px-6 shadow-sm backdrop-blur-md">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="hidden border-l border-gray-200 pl-4 md:block">
            <p className="text-sm font-medium text-slate-900">
              Welcome back, {name} 👋
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 md:flex">
            <Search size={17} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search"
              className="h-9 w-40 bg-transparent text-sm text-slate-700 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Profile */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex cursor-pointer items-center gap-2 rounded-xl px-2 py-1 hover:bg-gray-100"
            >
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <Image src="/girl.jpg" alt="Profile" width={40} height={40} />
                </div>
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-sm font-medium text-slate-900">
                  {name}
                </p>

                <p className="text-xs text-slate-900">User</p>
              </div>

              <ChevronDown size={16} className="text-slate-900" />
            </div>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-50 mt-3 w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-lg text-slate-900"
            >
              <li>
                <a>Profile</a>
              </li>

              <li>
                <a>Settings</a>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
