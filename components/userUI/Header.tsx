"use client";

import { FaChevronDown } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa6";
import {  ChevronDown } from "lucide-react";
import Link from "next/link";

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
          <div className="hidden md:flex items-center gap-3 border-l border-gray-200 pl-5">
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold text-gray-800">Welcome back</p>

              <p className="text-xl font-semibold text-teal-800">
                {name}
                <span className="ml-1">👋</span>
              </p>
            </div>
            ```
          </div>
          ```
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* Profile */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex cursor-pointer items-center gap-2 rounded-xl px-2 py-1 hover:bg-gray-100 mt-5"
            >
              <div className="avatar">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-800">
                  {name?.charAt(0)?.toUpperCase()}
                </div>
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-xs text-slate-900">User</p>
              </div>

              <FaChevronDown size={16} className="text-slate-900" />
            </div>
            <ul className="menu dropdown-content z-50 mt-3 w-48 rounded-xl border border-gray-100 bg-white p-2 text-slate-900 shadow-lg">
              <Link href="/user/settings">
                <li className="rounded-lg px-3 py-2.5 font-medium transition-colors hover:bg-teal-50 hover:text-teal-800">
                  Profile
                </li>
              </Link>

              <Link href="/">
                <li className="mt-1 rounded-lg px-3 py-2.5 font-medium text-red-600 transition-colors hover:bg-red-50">
                  Logout
                </li>
              </Link>
            </ul>
            ```
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
