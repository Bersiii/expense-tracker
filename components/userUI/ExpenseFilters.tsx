type ExpenseFiltersProps = {
  category: string;
  categories: string[];
  handleCategoryChange: (value: string) => void;
};

const ExpenseFilters = ({
  category,
  categories,
  handleCategoryChange,
}: ExpenseFiltersProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 p-4">
      <div className="flex flex-wrap gap-2">
        {/* Category */}
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 outline-none"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilters;
