"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  Receipt,
  PlusCircle,
  Tags,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Overview",
      href: "/user",
      icon: LayoutDashboard,
    },
    {
      name: "Expenses",
      href: "/user/expenses",
      icon: Receipt,
    },
    {
      name: "Add Expense",
      href: "/user/Add-expenses",
      icon: PlusCircle,
    },
    {
      name: "Categories",
      href: "/user/Categories",
      icon: Tags,
    },
    {
      name: "Settings",
      href: "/user/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-gray-200 bg-[#c0bfc4] lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-24 items-center px-8">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Montra logo"
              width={120}
              height={60}
              className="h-auto w-[120px] object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 pt-5">
          <ul className="flex w-full flex-col gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.href ||
                (item.href !== "/user" && pathname.startsWith(item.href));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-white text-teal-700 shadow-sm"
                        : "text-slate-700 hover:bg-white/60 hover:text-teal-700"
                    }`}
                  >
                    <Icon size={20} strokeWidth={active ? 2.5 : 2} />

                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="border-t border-gray-300/60 p-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-white/60 hover:text-red-600"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
