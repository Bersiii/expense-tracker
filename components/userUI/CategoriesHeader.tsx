"use client";

import React from "react";
import { Plus } from "lucide-react";

type CategoriesHeaderProps = {
  onAddCategory?: () => void;
};

const CategoriesHeader = ({ onAddCategory }: CategoriesHeaderProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage and track your spending categories
          </p>
        </div>

        {/* Add Category button */}
        {/* <button
          type="button"
          onClick={onAddCategory}
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          <Plus size={18} />
          Add Category
        </button> */}
      </div>

      {/* Bottom border */}
      <div className="mt-6 border-b border-gray-200" />
    </div>
  );
};

export default CategoriesHeader;
