import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="navbar shadow-sm mx-auto flex h-[64px] max-w-[1200px] items-center
      justify-between rounded-2xl border border-gray-200 bg-#aaabb0 px-6
      backdrop-blur-md"
    >
      <div className="flex items-center gap-60">
        <Image
          src="/logo.png"
          alt="Montra logo"
          width={120}
          height={80}
          className="object-contain"
        />

        <div className="flex-1">
          <p className="btn btn-ghost text-xl text-black">Welcome Back, John! 👋</p>
          <p className="text-sm text-gray-500">
            Ready to manage your expenses today?
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src="/girl.jpg"
                width={40}
                height={40}
              />
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
