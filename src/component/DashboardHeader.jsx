import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import favorite from '../assets/favorite.svg'
import message from '../assets/message.svg'
import notification from '../assets/notification.svg'
import logoFull from '../assets/logo-full.png'
import profile from '../assets/profile.jpg'

export const DashboardHeader = () => {
  return (
    <div className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={logoFull} alt="Logo" className="w-50 h-50" />
        {/* <span className="text-2xl font-semibold text-gray-800">Travl Hotel</span> */}
      </div>

      {/* Search Bar */}
      <div className="relative flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 pl-10 w-64 bg-gray-100 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <SearchIcon className="absolute left-3 text-gray-500 w-5 h-5" />
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center space-x-6">
        {/* Favorites Icon */}
        <div className="relative">
          <img
            src={favorite}
            alt="Favorites"
            className="text-2xl text-gray-700 hover:text-gray-900 transition-transform duration-200 cursor-pointer"
          />
        </div>

        {/* Messages Icon */}
        <div className="relative">
          <img
            src={message}
            alt="Messages"
            className="text-2xl text-gray-700 hover:text-gray-900 transition-transform duration-200 cursor-pointer"
          />
          <span className="absolute bottom-5 left-5 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </div>

        {/* Notifications Icon */}
        <div className="relative">
          <img
            src={notification}
            alt="Notifications"
            className="text-2xl text-gray-700 hover:text-gray-900 transition-transform duration-200 cursor-pointer"
          />
          <span className="absolute bottom-4 left-3 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">8</span>
        </div>

        {/* Profile Icon */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={profile}
            alt="Profile"
            className="w-11 h-10 rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};
