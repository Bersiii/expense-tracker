type CategoryData = {
  amount: number;
  transactions: number;
};

type CategoryStatisticsProps = {
  categories: [string, CategoryData][];
  totalSpent: number;
  highestCategory: [string, CategoryData] | null;
};

const CategoryStatistics = ({
  categories,
  totalSpent,
  highestCategory,
}: CategoryStatisticsProps) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* Total Categories */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
        <p className="text-sm font-medium text-gray-500">Total Categories</p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          {categories.length}
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          Available spending categories
        </p>
      </div>

      {/* Total Spent */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
        <p className="text-sm font-medium text-gray-500">Total Spent</p>

        <h2 className="mt-2 text-2xl font-bold text-teal-700">
          ${totalSpent.toFixed(2)}
        </h2>

        <p className="mt-1 text-xs text-gray-400">Across all categories</p>
      </div>

      {/* Highest Category */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
        <p className="text-sm font-medium text-gray-500">Highest Category</p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          {highestCategory ? highestCategory[0] : "No data"}
        </h2>

        {highestCategory ? (
          <p className="mt-1 text-sm font-medium text-teal-700">
            ${highestCategory[1].amount.toFixed(2)} spent
          </p>
        ) : (
          <p className="mt-1 text-xs text-gray-400">No expenses recorded</p>
        )}
      </div>
    </div>
  );
};

export default CategoryStatistics;
