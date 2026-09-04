type CategoryData = {
  amount: number;
  transactions: number;
};

type CategoryListProps = {
  filteredCategories: [string, CategoryData][];
  totalSpent: number;
  getCategoryIcon: (category: string) => string;
};

const CategoryList = ({
  filteredCategories,
  totalSpent,
  getCategoryIcon,
}: CategoryListProps) => {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
      {filteredCategories.length === 0 ? (
        <div className="p-10 text-center">
          <p className="text-gray-500">No categories found.</p>
        </div>
      ) : (
        filteredCategories
          .sort((a, b) => b[1].amount - a[1].amount)
          .map(([category, data]) => {
            const percentage =
              totalSpent > 0 ? (data.amount / totalSpent) * 100 : 0;

            return (
              <div
                key={category}
                className="border-b border-gray-100 p-5 last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  {/* Category name */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-xl">
                      {getCategoryIcon(category)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {category}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {data.transactions}{" "}
                        {data.transactions === 1
                          ? "transaction"
                          : "transactions"}
                      </p>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="text-right">
                    <p className="font-semibold text-teal-900">
                      ${data.amount.toFixed(2)}
                    </p>

                    <p className="text-sm text-gray-500">
                      {percentage.toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-2 w-full rounded-full bg-teal-100">
                  <div
                    className="h-2 rounded-full bg-teal-500 transition-all"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>
              </div>
            );
          })
      )}
    </div>
  );
};

export default CategoryList;
