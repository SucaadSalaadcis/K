import React, { useState } from 'react';

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState('');

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? '' : menu);
  };

  return (
    <nav className="sm:bg-gray-100 shadow-md shadow-cyan-900/50 text-sm justify-around p-4 flex flex-col md:flex-row  ">
      <div className="flex  w-full md:w-auto">

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden ">
          <button
            onClick={() => toggleDropdown('main')}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 sm:block hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Menu */}
      <div
        className={`sm:block hidden mr-[200px] flex-col md:flex-row  md:flex items-center md:space-x-4 w-full md:w-auto ${
          dropdownOpen === 'main' ? 'block' : 'hidden'
        } md:block`}
      >
        {/* Location Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('location')}
            className="flex items-center focus:outline-none"
          >
            Deliver to Somalia
            <svg
              className="ml-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06 0L10 10.91l3.71-3.7a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen === 'location' && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Somalia
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                USA
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Canada
              </a>
            </div>
          )}
        </div>

        {/* Consumer Electronics Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('electronics')}
            className="flex items-center focus:outline-none"
          >
            Consumer Electronics
            <svg
              className="ml-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06 0L10 10.91l3.71-3.7a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen === 'electronics' && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Smartphones
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Tablets
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Accessories
              </a>
            </div>
          )}
        </div>

        {/* Additional Dropdowns */}
        {['Apparel', 'Home and Garden', 'Beauty and Personal Care', 'Health and Medical'].map(
          (category) => (
            <div className="relative" key={category}>
              <button
                onClick={() => toggleDropdown(category)}
                className="flex items-center focus:outline-none"
              >
                {category}
                <svg
                  className="ml-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06 0L10 10.91l3.71-3.7a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownOpen === category && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </nav>
  );
};

export default Dropdown;
