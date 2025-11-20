import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DiscountBanner from './DiscountBanner';
import OrderFormModal from "./OrderFormModal";

// Icons
import {
    IoBagCheckOutline,
    IoFastFoodOutline,
    IoPizzaOutline,
    IoFishOutline,
} from 'react-icons/io5';

// Images
import Fish from "../assets/Fish.jpeg";
import Beef from "../assets/Beef.jpeg";
import CheeseB from "../assets/CheeseB.jpeg";
import Goat from "../assets/pGoat.jpeg";
import Chicken from "../assets/bChicken.jpeg";
import Brownie from "../assets/bBrownie.jpeg";

// ------------------ CATEGORIES ------------------
const categories = [
    { icon: IoBagCheckOutline, label: 'Bakery' },
    { icon: IoFastFoodOutline, label: 'Burger' },
    { icon: IoPizzaOutline, label: 'Drinks' },
    { icon: IoFishOutline, label: 'Chicken' },
    { icon: IoPizzaOutline, label: 'Pizza' },
];

// ------------------ POPULAR DISHES ------------------
const dishData = [
    { name: 'Fish Burger', price: 5.59, rating: 4.97, time: '25 min', image: Fish },
    { name: 'Beef Burger', price: 5.59, rating: 5.0, time: '25 min', image: Beef },
    { name: 'Cheese Burger', price: 5.59, rating: 4.9, time: '25 min', image: CheeseB },
];

// ------------------ RECENT ORDER DISHES ------------------
const dishes = [
    { name: "Goat Pizza", category: "Pizza", price: 7.5, image: Goat, rating: 4.5, time: "20 min" },
    { name: "Chicken Burger", category: "Burger", price: 6.0, image: Chicken, rating: 5.0, time: "15 min" },
    { name: "Brownie", category: "Bakery", price: 3.0, image: Brownie, rating: 4.7, time: "10 min" },
];

// ------------------ DISH CARD ------------------
const DishCard = ({ dish, isPopular, onOrder }) => (
    <div className="relative bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
        {isPopular && (
            <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-tl-xl rounded-br-lg">
                15% OFF
            </span>
        )}
        <div className="absolute top-4 right-4 text-red-500 cursor-pointer">❤️</div>
        <div className="h-32 w-full mb-4 rounded-lg overflow-hidden">
            <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-between items-center">
            <h4 className="font-bold text-gray-800">{dish.name}</h4>
            <button
                onClick={() => onOrder(dish)}
                className="py-1 px-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm"
            >
                Order Now
            </button>
        </div>
        <div className="text-yellow-500 text-sm my-1">
            {'⭐'.repeat(Math.round(dish.rating))}
        </div>
        <div>
            <span className="text-xl font-extrabold text-go-meal-dark">
                ${dish.price.toFixed(2)}
            </span>
        </div>
    </div>
);

// ------------------ RECENT ORDER CARD ------------------
const RecentOrderCard = ({ dish, onOrder }) => (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
        <div className="h-24 w-full bg-gray-200 rounded-lg mb-3 overflow-hidden">
            <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-between items-center">
            <h4 className="font-bold text-gray-800">{dish.name}</h4>
            <button
                onClick={() => onOrder(dish)}
                className="py-1 px-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm"
            >
                Order Now
            </button>
        </div>
        <p className="text-lg font-extrabold text-go-meal-dark mt-1">${dish.price}</p>
        <p className="text-xs text-gray-500 mt-1">{dish.rating} ★ · {dish.time}</p>
    </div>
);

// ------------------ MAIN CONTENT ------------------
const MainContent = () => {
    const [selectedDish, setSelectedDish] = useState(null);

    const handleOrderNow = (dish) => {
        setSelectedDish(dish);
    };

    return (
        <div className="pr-4">
            <DiscountBanner />

            {/* CATEGORY SECTION */}
            <section className="mb-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Categories</h2>
                    <button className="text-sm text-go-meal-dark font-semibold hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.label}
                            to={`/category/${cat.label.toLowerCase()}`}
                            className="flex flex-col items-center p-5 rounded-xl bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <div className="p-4 bg-go-meal-light rounded-xl text-go-meal-dark text-3xl mb-2">
                                <cat.icon />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{cat.label}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* POPULAR DISHES */}
            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Popular Dishes</h2>
                    <button className="text-sm text-go-meal-dark font-semibold hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {dishData.map((dish, index) => (
                        <DishCard key={index} dish={dish} isPopular={true} onOrder={handleOrderNow} />
                    ))}
                </div>
            </section>

            {/* RECENT ORDERS */}
            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
                    <button className="text-sm text-go-meal-dark font-semibold hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {dishes.map((dish, index) => (
                        <RecentOrderCard key={index} dish={dish} onOrder={handleOrderNow} />
                    ))}
                </div>
            </section>

            {/* ORDER FORM MODAL */}
            {selectedDish && (
                <OrderFormModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
            )}
        </div>
    );
};

export default MainContent;
