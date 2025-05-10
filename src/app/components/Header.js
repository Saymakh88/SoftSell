"use client";
import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
          SoftSell
        </div>
      </div>
    </header>
  );
}

export default Header;
