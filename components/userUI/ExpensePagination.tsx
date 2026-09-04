type ExpensePaginationProps = {
  totalExpenses: number;
  startIndex: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const ExpensePagination = ({
  totalExpenses,
  startIndex,
  itemsPerPage,
  totalPages,
  currentPage,
  setCurrentPage,
}: ExpensePaginationProps) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
      <p className="text-[10px] text-gray-500">
        Showing {totalExpenses === 0 ? 0 : startIndex + 1} to{" "}
        {Math.min(startIndex + itemsPerPage, totalExpenses)} of {totalExpenses}{" "}
        expenses
      </p>

      <div className="flex items-center gap-1">
        {/* Previous */}
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
          className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-xs text-gray-500 disabled:opacity-40"
        >
          ‹
        </button>

        {/* Pages */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`flex h-7 w-7 items-center justify-center rounded-md border text-xs ${
                currentPage === page
                  ? "border-teal-500 text-teal-500"
                  : "border-gray-200 text-gray-500"
              }`}
            >
              {page}
            </button>
          ),
        )}

        {/* Next */}
        <button
          type="button"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() =>
            setCurrentPage((page) => Math.min(page + 1, totalPages))
          }
          className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-xs text-gray-500 disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ExpensePagination;
