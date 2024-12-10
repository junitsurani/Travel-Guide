import React, { useState } from "react";
import profile from '../assets/profile.jpg'


export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="bg-white text-gray-800 w-64 h-screen fixed shadow-lg">
      <div className="overflow-y-auto h-full">
        <ul className="space-y-2 mt-4 px-4">
          {/* Dashboard */}
          <li>
            <button
              onClick={() => toggleMenu("dashboard")}
              className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-200 transition"
            >
              <span className="flex items-center space-x-2">
                <i className="flaticon-025-dashboard text-lg text-blue-400"></i>
                <span className="font-medium">Dashboard</span>
              </span>
              <i className="text-gray-500">
                {activeMenu === "dashboard" ? "▲" : "▼"}
              </i>
            </button>
            {activeMenu === "dashboard" && (
              <ul className="ml-6 space-y-1">
                <li>
                  <a
                    href="#"
                    className="block p-2 text-sm text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    Dashboard Light
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 text-sm text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    Dashboard Dark
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 text-sm text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    Guest List
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Apps */}
          <li>
            <button
              onClick={() => toggleMenu("apps")}
              className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-200 transition"
            >
              <span className="flex items-center space-x-2">
                <i className="flaticon-050-info text-lg text-purple-400"></i>
                <span className="font-medium">Apps</span>
              </span>
              <i className="text-gray-500">
                {activeMenu === "apps" ? "▲" : "▼"}
              </i>
            </button>
            {activeMenu === "apps" && (
              <ul className="ml-6 space-y-1">
                <li>
                  <a
                    href="#"
                    className="block p-2 text-sm text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 text-sm text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    Post Details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 text-sm text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    Calendar
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Charts */}
          <li>
            <button
              onClick={() => toggleMenu("charts")}
              className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-200 transition"
            >
              <span className="flex items-center space-x-2">
                <i className="flaticon-041-graph text-lg text-green-400"></i>
                <span className="font-medium">Charts</span>
              </span>
              <i className="text-gray-500">
                {activeMenu === "charts" ? "▲" : "▼"}
              </i>
            </button>
            {activeMenu === "charts" && (
              <ul className="ml-6 space-y-1">
                <li>
                  <a
                    href="#"
                    className="block p-2 text-sm text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    Flot
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 text-sm text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    Morris
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Profile Section */}
        <div className="mt-8 px-4">
          <div className="bg-gray-100 p-4 rounded-lg text-center shadow-md">
            <img
              src={profile}
              alt="Profile"
              className="w-16 h-14 rounded-full mx-auto"
            />
            <h5 className="mt-2 font-medium text-gray-800">Team</h5>
            <p className="text-sm text-gray-600">Team@gmail.com</p>
            <a
              href="#"
              className="mt-2 block bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            <strong className="text-gray-800">Travel Hotel Admin Dashboard</strong>{" "}
            © 2024 All Rights Reserved
          </p>
          <p>
            Made with <span className="text-red-500">&hearts;</span> by Team
          </p>
        </div>
      </div>
    </div>
  );
};
