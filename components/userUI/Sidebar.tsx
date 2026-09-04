"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  Receipt,
  PlusCircle,
  Tags,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
    <>
      {/* ================= MOBILE MENU BUTTON ================= */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700 text-white shadow-md transition-all hover:bg-teal-800 lg:hidden"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-60 border-r border-gray-200 bg-[#c0bfc4] shadow-lg transition-transform duration-300 lg:w-64 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* ================= LOGO ================= */}
          <div className="flex h-24 items-center justify-center px-6">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/logo1.png"
                alt="Montra logo"
                width={120}
                height={60}
                className="h-auto w-[110px] object-contain"
              />
            </Link>
          </div>

          {/* ================= NAVIGATION ================= */}
          <nav className="flex-1 px-3 pt-5">
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
                      onClick={() => setOpen(false)}
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

          {/* ================= LOGOUT ================= */}
          <div className="border-t border-gray-300/60 p-3">
          <Link href="/">
           <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-white/60 hover:text-red-600"
            >
              <LogOut size={20} />

              <span>Logout</span>
            </button>
          </Link>
           
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
