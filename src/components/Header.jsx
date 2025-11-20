// src/components/Header.jsx
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const Header = () => (
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Hello, Patricia</h1>
        
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm w-80 border border-gray-200">
            <IoSearchOutline className="text-gray-400 mr-2 w-5 h-5" />
            <input 
                type="text" 
                placeholder="What do you want today?" 
                className="flex-1 focus:outline-none text-sm text-gray-600" 
            />
        </div>
    </div>
);

export default Header;