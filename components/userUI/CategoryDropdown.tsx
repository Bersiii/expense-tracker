
"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  category: string;
  categories: string[];
  handleCategoryChange: (category: string) => void;
};

export default function CategoryDropdown({
  category,
  categories,
  handleCategoryChange,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-40 items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 shadow-sm transition-all hover:border-teal-300 focus:outline-none"
      >
        <span>{category}</span>

        <FaChevronDown
          className={`text-[10px] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-gray-100 bg-white p-1 shadow-lg">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                handleCategoryChange(item);
                setOpen(false);
              }}
              className={`w-full rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors ${
                category === item
                  ? "bg-teal-50 text-teal-800"
                  : "text-gray-600 hover:bg-gray-50 hover:text-teal-800"
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
