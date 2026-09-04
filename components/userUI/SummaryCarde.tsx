type SummaryCardsProps = {
  averageExpense: number;
  transactions: number;
  thisMonth: number;
  totalExpense: number;
};

export default function SummaryCards({
  averageExpense,
  transactions,
  thisMonth,
  totalExpense,
}: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Total Expense */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">Total Expenses</p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          ${totalExpense.toFixed(2)}
        </h2>

        <p className="mt-1 text-xs text-gray-400">All your expenses</p>
      </div>

      {/* This Month */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">This Month</p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          ${thisMonth.toFixed(2)}
        </h2>

        <p className="mt-1 text-xs text-gray-400">Spending this month</p>
      </div>

      {/* Transactions */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">Transactions</p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          {transactions}
        </h2>

        <p className="mt-1 text-xs text-gray-400">Total transactions</p>
      </div>

      {/* Average */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">Average Expense</p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          ${averageExpense.toFixed(2)}
        </h2>

        <p className="mt-1 text-xs text-gray-400">Per transaction</p>
      </div>
    </div>
  );
}


