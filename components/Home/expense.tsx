import Image from "next/image";

export default function Expenses() {
  return (
    <main className="min-h-screen  pt-28 pb-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1
              id="about"
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
            >
              <span className="text-orange-500">E</span>xpenses
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Track, manage, and analyze your spending history in real time.
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600">
            + Add Expense
          </button>
        </div>

        {/* Overview Stats Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Total Spent This Month
            </p>
            <p className="mt-2 text-3xl font-bold text-gray-900">$2,550.00</p>
            <span className="mt-1 inline-block text-xs font-medium text-red-500">
              ↓ 3.4% from last month
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Highest Category
            </p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              Food & Dining
            </p>
            <span className="mt-1 inline-block text-xs font-medium text-gray-500">
              $650.00 spent
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              Remaining Budget
            </p>
            <p className="mt-2 text-3xl font-bold text-gray-900">$1,450.00</p>
            <span className="mt-1 inline-block text-xs font-medium text-green-600">
              On track
            </span>
          </div>
        </div>

        {/* Expenses Table Section */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">
              Recent Transactions
            </h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search expenses..."
                className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Supermarket Groceries
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">
                      Food & Dining
                    </span>
                  </td>
                  <td className="px-6 py-4">Sep 2, 2026</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">
                    -$85.50
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Monthly Fuel
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                      Transport
                    </span>
                  </td>
                  <td className="px-6 py-4">Sep 1, 2026</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">
                    -$60.00
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Online Shopping (Clothes)
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-600">
                      Shopping
                    </span>
                  </td>
                  <td className="px-6 py-4">Aug 30, 2026</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">
                    -$120.00
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Electricity Bill
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                      Bills
                    </span>
                  </td>
                  <td className="px-6 py-4">Aug 28, 2026</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">
                    -$45.20
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
