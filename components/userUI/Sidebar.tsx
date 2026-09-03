'use client';


import Image from "next/image";
import {
  LayoutDashboard,
  Receipt,
  PlusCircle,

  Tags,
  Settings,
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
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64  bg-[#c0bfc4] lg:block">
      <div className="flex h-full flex-col">
        <div className="p-5 pl-10  items-center justify-center">
          <Image
            src="/logo1.png"
            alt="Montra logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
        {/* Sidebar menu */}
        <nav className="flex-1 px-4 pt-5 ">
          <ul className="menu w-full gap-2 pt-0  ">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                      active
                        ? "bg-white text-teal-500 shadow-sm"
                        : "text-slate-700 hover:bg-white/50"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className=" p-4">
          <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-700 hover:bg-white/50">
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
