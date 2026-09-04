"use client";

const CategoriesHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 px-6 py-7 shadow-sm sm:px-8">
      {/* Decorative circles */}
      <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-20 right-24 h-44 w-44 rounded-full bg-white/5" />

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Categories
        </h1>

        <p className="mt-1 text-sm text-teal-100">
          Manage and track your spending categories
        </p>
      </div>
    </div>
  );
};

export default CategoriesHeader;
