// src/components/OrderSummary.jsx
import React from 'react';
import { IoNotificationsOutline, IoChatbubbleEllipsesOutline, IoArrowUpCircleOutline, IoChevronDownOutline, IoAddCircleOutline } from 'react-icons/io5';

const OrderSummary = () => {
    // Dummy Data
    const orderItems = [
        { name: "Pepperoni Pizza", price: 5.50, qty: 1, image: '🍕' },
        { name: "Cheese Burger", price: 5.50, qty: 1, image: '🍔' },
        { name: "Vegan Pizza", price: 5.50, qty: 1, image: '🥗' },
    ];
    const serviceFee = 1.00;
    const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);
    const total = subtotal + serviceFee;

    return (
        <div className="w-80 bg-white p-6 border-l border-gray-100 flex flex-col shadow-2xl overflow-y-auto">
            {/* Top Icons and Profile */}
            <div className="flex justify-end items-center space-x-3 mb-6">
                <div className="p-2 text-xl text-gray-600 rounded-full hover:bg-gray-100 cursor-pointer"><IoNotificationsOutline /></div>
                <div className="p-2 text-xl text-gray-600 rounded-full hover:bg-gray-100 cursor-pointer"><IoChatbubbleEllipsesOutline /></div>
                <div className="h-10 w-10 bg-gray-300 rounded-full border-2 border-white shadow-md"></div> {/* Profile Pic */}
            </div>

            {/* Balance Card */}
            <div className="bg-go-meal-primary p-4 rounded-xl mb-6 shadow-md">
                <h3 className="text-sm text-gray-800 font-medium">Your Balance</h3>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-3xl font-bold text-white">$12,000</span>
                    <button className="flex items-center bg-white text-go-meal-primary font-bold py-1 px-3 rounded-lg text-xs shadow-sm hover:bg-gray-50">
                        <IoArrowUpCircleOutline className="mr-1 w-4 h-4" />
                        Top Up
                    </button>
                </div>
            </div>

            {/* Address Details */}
            <div className="mb-6 border-b pb-4">
                <div className="flex justify-between items-center text-sm font-bold mb-2">
                    <span className="text-gray-800">Your Address</span>
                    <button className="text-go-meal-dark text-xs font-semibold hover:underline">Change</button>
                </div>
                <div className="text-sm text-gray-600">
                    <p className="font-semibold">Elm Street, 23</p>
                    <p className="text-xs text-gray-500">Add details, consectetur adipiscing elit...</p>
                    <div className="flex mt-2 space-x-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 flex items-center">
                            <IoAddCircleOutline className="mr-1" /> Add Details
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 flex items-center">
                            <IoAddCircleOutline className="mr-1" /> Add Note
                        </span>
                    </div>
                </div>
            </div>

            {/* Order Details (Scrollable) */}
            <h3 className="text-lg font-bold text-gray-800 mb-4">Order Details</h3>
            
            <div className="flex-grow overflow-y-auto space-y-4 pr-1">
                {orderItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3">
                        <div className="flex items-center">
                            {/* Food Image Placeholder */}
                            <div className="h-10 w-10 rounded-full bg-go-meal-light mr-3 flex items-center justify-center text-lg shadow-sm">{item.image}</div> 
                            <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">${item.price.toFixed(2)}</span>
                    </div>
                ))}
            </div>

            {/* Total Section */}
            <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>Service Fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-800 pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-go-meal-primary">${total.toFixed(2)}</span>
                </div>
            </div>

            {/* Coupon and Checkout */}
            <div className="mt-6 space-y-3">
                <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors">
                    <IoChevronDownOutline className="mr-2 w-4 h-4" />
                    Have a coupon code?
                </button>
                <button className="w-full py-4 bg-go-meal-primary text-white font-extrabold rounded-lg text-lg shadow-xl hover:bg-go-meal-dark transition-colors">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default OrderSummary;