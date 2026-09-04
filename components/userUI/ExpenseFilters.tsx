import CategoryDropdown from "./CategoryDropdown";

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
        <CategoryDropdown
          category={category}
          categories={categories}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
    </div>
  );
};

export default ExpenseFilters;
