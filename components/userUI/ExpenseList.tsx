import { Trash2 } from "lucide-react";


type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
  description: string | null;
  date: string;
  userId: number;
};

type ExpenseListProps = {
  displayedExpenses: Expense[];
  categoryColors: Record<string, string>;
  formatDate: (date: string) => string;
  handleDelete: (id: number) => void;
};

const ExpenseList = ({
  displayedExpenses,
  categoryColors,
  formatDate,
  handleDelete,
}: ExpenseListProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px]">
        {/* Header */}
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50/50">
            <th className="w-12 px-4 py-3">
              <input
                type="checkbox"
                className="h-3.5 w-3.5 rounded border-gray-300"
              />
            </th>

            <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase text-gray-500">
              Expense
            </th>

            <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase text-gray-500">
              Category
            </th>

            <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase text-gray-500">
              Amount
            </th>

            <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase text-gray-500">
              Date ↕
            </th>

            <th className="px-4 py-3 text-center text-[10px] font-semibold uppercase text-gray-500">
              Actions
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {displayedExpenses.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="py-12 text-center text-sm text-gray-400"
              >
                No expenses found.
              </td>
            </tr>
          ) : (
            displayedExpenses.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 transition hover:bg-gray-50"
              >
                {/* Checkbox */}
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded border-gray-300"
                  />
                </td>

                {/* Expense */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 text-sm">
                      {item.category === "Transport"
                        ? "🚗"
                        : item.category === "Shopping"
                          ? "🛍️"
                          : item.category === "Bills"
                            ? "💡"
                            : item.category === "Entertainment"
                              ? "🎬"
                              : "🍔"}
                    </div>

                    <div>
                      <p className="text-xs font-medium text-gray-800">
                        {item.title}
                      </p>

                      <p className="text-[10px] text-gray-400">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-4 py-3">
                  <span
                    className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                      categoryColors[item.category] ||
                      "bg-gray-50 text-gray-500"
                    }`}
                  >
                    {item.category}
                  </span>
                </td>

                {/* Amount */}
                <td className="px-4 py-3">
                  <span className="text-xs font-semibold text-red-500">
                    -$
                    {Number(item.amount).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </td>

                {/* Date */}
                <td className="px-4 py-3 text-xs text-gray-600">
                  {formatDate(item.date)}
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-center">
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="text-gray-400 transition hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
