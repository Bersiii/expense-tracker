import React from "react";

const Note = () => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className=" backdrop-blur-md rounded-2xl shadow-sm  p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-base-200">
          {/* Item 1: Track expenses */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 md:px-4 first:pl-0">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-base mb-1">
                Track expenses
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Easily track where your money goes and stay in control.
              </p>
            </div>
          </div>

          {/* Item 2: Set budgets */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 md:px-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-base mb-1">
                Set budgets
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Create budgets that work for you and achieve your goals.
              </p>
            </div>
          </div>

          {/* Item 3: Smart insights */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 md:px-4 last:pr-0">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-base mb-1">
                Smart insights
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Get insights that help you make better financial decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Note;
