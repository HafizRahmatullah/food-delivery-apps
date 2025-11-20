import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  IoHomeOutline,
  IoFastFoodOutline,
  IoPizzaOutline,
  IoFishOutline,
  IoCafeOutline,
  IoBagHandleOutline,
  IoHeartOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoChevronDownOutline,
  IoChevronUpOutline,
} from "react-icons/io5";

const Sidebar = () => {
  const [openCategories, setOpenCategories] = useState(false);

  return (
    <div className="w-60 h-screen bg-white p-5 shadow-xl flex flex-col">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-go-meal-primary mb-10">
        GoMeal.
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg cursor-pointer transition 
            ${
              isActive
                ? "bg-go-meal-light text-go-meal-dark font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <IoHomeOutline className="w-5 h-5 mr-3" />
          Home
        </NavLink>

        {/* Categories - Dropdown */}
        <div>
          <button
            onClick={() => setOpenCategories(!openCategories)}
            className="flex items-center p-3 w-full rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            <IoFastFoodOutline className="w-5 h-5 mr-3" />
            Categories
            {openCategories ? (
              <IoChevronUpOutline className="ml-auto" />
            ) : (
              <IoChevronDownOutline className="ml-auto" />
            )}
          </button>

          {/* Category List */}
          {openCategories && (
            <div className="ml-10 mt-1 space-y-2 text-sm text-gray-600">

              <NavLink
                to="/category/pizza"
                className="flex items-center hover:text-go-meal-dark"
              >
                <IoPizzaOutline className="w-4 h-4 mr-2" /> Pizza
              </NavLink>

              <NavLink
                to="/category/burger"
                className="flex items-center hover:text-go-meal-dark"
              >
                <IoFastFoodOutline className="w-4 h-4 mr-2" /> Burger
              </NavLink>

              <NavLink
                to="/category/chicken"
                className="flex items-center hover:text-go-meal-dark"
              >
                <IoFishOutline className="w-4 h-4 mr-2" /> Chicken
              </NavLink>

              <NavLink
                to="/category/bakery"
                className="flex items-center hover:text-go-meal-dark"
              >
                <IoBagHandleOutline className="w-4 h-4 mr-2" /> Bakery
              </NavLink>

              <NavLink
                to="/category/drinks"
                className="flex items-center hover:text-go-meal-dark"
              >
                <IoCafeOutline className="w-4 h-4 mr-2" /> Drinks
              </NavLink>

            </div>
          )}
        </div>

        {/* My Cart */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition 
            ${
              isActive
                ? "bg-go-meal-light text-go-meal-dark font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <IoBagHandleOutline className="w-5 h-5 mr-3" />
          My Cart
        </NavLink>

        {/* My Orders */}
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition 
            ${
              isActive
                ? "bg-go-meal-light text-go-meal-dark font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <IoFastFoodOutline className="w-5 h-5 mr-3" />
          My Orders
        </NavLink>

        {/* Favorites */}
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition 
            ${
              isActive
                ? "bg-go-meal-light text-go-meal-dark font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <IoHeartOutline className="w-5 h-5 mr-3" />
          Favorites
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition 
            ${
              isActive
                ? "bg-go-meal-light text-go-meal-dark font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <IoSettingsOutline className="w-5 h-5 mr-3" />
          Settings
        </NavLink>
      </nav>

      {/* Logout */}
      <button className="flex items-center mt-6 p-3 rounded-lg text-red-500 hover:bg-red-50 transition">
        <IoLogOutOutline className="w-5 h-5 mr-3" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
