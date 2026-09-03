import React from "react";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <ul className="menu bg-[#c0bfc4] min-h-full w-64">
          {/* Sidebar content here */}
          <li>
            <a> Overview1</a>
          </li>
          <li>
            <a>Expenses</a>
          </li>
          <li>
            <a>Add Expenses</a>
          </li>
          <li>
            <a>Budgets</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
