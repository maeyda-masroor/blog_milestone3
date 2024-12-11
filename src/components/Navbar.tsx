"use client"
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold">
              Logo
            </a>
          </div>

          {/* Toggle button for small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex space-x-4 items-center`}
          >
            <a
              href="#"
              className="hover:text-gray-400 text-sm md:text-base transition"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-gray-400 text-sm md:text-base transition"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-gray-400 text-sm md:text-base transition"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-gray-400 text-sm md:text-base transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Collapsible menu for small screens */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-700`}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-600 hover:text-gray-200"
        >
          Home
        </a>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-600 hover:text-gray-200"
        >
          About
        </a>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-600 hover:text-gray-200"
        >
          Services
        </a>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-600 hover:text-gray-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
