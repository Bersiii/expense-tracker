import React from 'react'

const About = () => {
  return (
    <main className="min-h-screen  pt-32 pb-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header Section */}
        <div className="max-w-2xl">
          <h1
            id="about"
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
             <span className="text-teal-600">A</span>bout
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We believe that taking control of your money shouldn't feel like a
            chore. Montra is designed to make expense tracking intuitive,
            secure, and effortless.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Mission / Story */}
          <div className="space-y-6 text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p>
              Managing personal finances often comes down to tools that are
              either too complicated or too basic. Montra bridges that gap by
              offering a clean dashboard that highlights your spending habits,
              budgets, and cash flow at a glance.
            </p>
            <p>
              Whether you are saving for a big purchase or simply trying to
              understand where your monthly money goes, our goal is to give you
              clarity and confidence over your financial choices.
            </p>
          </div>

          {/* Right: Feature Highlights Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Why Choose Montra?
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-600">
                  ✓
                </span>
                <span>
                  <strong>Real-time tracking:</strong> Instantly monitor your
                  income, expenses, and account balances.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-600">
                  ✓
                </span>
                <span>
                  <strong>Visual insights:</strong> Clear spending categories
                  and graphs to catch trends early.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-600">
                  ✓
                </span>
                <span>
                  <strong>Simple interface:</strong> Clutter-free design built
                  for daily use without a steep learning curve.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About