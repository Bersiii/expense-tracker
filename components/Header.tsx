import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header
      id="contact"
      className="w-full px-6 pt-0 mb-2 fixed top-0 left-0 z-50"
    >
      <nav className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between rounded-2xl border border-gray-200 bg-#aaabb0 px-6 shadow-sm backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Montra logo"
            width={120}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          <a
            id="home"
            href="#"
            className="text-[13px] text-gray-600 transition hover:text-gray-900"
          >
            Home
          </a>

          <a
            href="#"
            className="text-[13px] text-gray-600 transition hover:text-gray-900"
          >
            About
          </a>

          

          <a
            href="#"
            className="text-[13px] text-gray-600 transition hover:text-gray-900"
          >
            Contact
          </a>
        </div>

        <details className="relative">
          <summary className="cursor-pointer list-none rounded-full border border-gray-200 bg-#aaabb0 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-sm transition hover:border-teal-300 hover:text-teal-500">
            Get started - for free
          </summary>

          <ul className="absolute right-0 z-10 mt-2 w-40 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
            <li>
              <a
                href="/register"
                className="block rounded-lg px-4 py-2 text-sm text-gray-700 transition hover:bg-teal-50 hover:text-teal-500"
              >
                Sign Up
              </a>
            </li>

            <li>
              <a
                href="/login"
                className="block rounded-lg px-4 py-2 text-sm text-gray-700 transition hover:bg-teal-50 hover:text-teal-500"
              >
                Log In
              </a>
            </li>
          </ul>
        </details>
      </nav>
    </header>
  );
};

export default Header;
