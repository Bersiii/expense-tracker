"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type CategoryDropdownProps = {
  category: string;
  setCategory: (category: string) => void;
};

export default function CategoryDropdown({
  category,
  setCategory,
}: CategoryDropdownProps) {
  const [open, setOpen] = useState(false);

  const categories = [
    "Food",
    "Transportation",
    "Shopping",
    "Bills",
    "Entertainment",
    "Health",
    "Education",
    "Other",
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-11 w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-900 shadow-sm outline-none transition-all hover:border-gray-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
      >
        <span className={category ? "text-gray-900" : "text-gray-400"}>
          {category || "Select category"}
        </span>

        <FaChevronDown
          className={`text-[10px] text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-gray-100 bg-white p-1 shadow-lg">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setOpen(false);
              }}
              className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                category === item
                  ? "bg-teal-50 font-medium text-teal-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-teal-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
