import React, { useState } from "react";
import { useParams } from "react-router-dom";

import DeliveryOrderForm from "../components/DeliveryOrderForm";

// ----- IMAGES IMPORTS -----
import Cheese from "../assets/Cheese.jpeg";
import Veg from "../assets/Veg.jpeg";
import Breakfast from "../assets/pBreakfast.jpeg";
import Goat from "../assets/pGoat.jpeg";
import Greek from "../assets/pGreek.jpeg";
import Mushroom from "../assets/pMushroom.jpeg";

import Beef from "../assets/Beef.jpeg";
import Croissant from "../assets/Croissant.jpeg";
import CheeseB from "../assets/CheeseB.jpeg";
import Bacon from "../assets/bbacon.jpeg";
import Chicken from "../assets/bChicken.jpeg";
import Onion from "../assets/bonion.jpeg";

import Brownie from "../assets/bBrownie.jpeg";
import Muffins from "../assets/bMuffins.jpeg";
import Pretzel from "../assets/bPretzel.jpeg";
import profiteroles from "../assets/bprofiteroles.jpeg";
import Sponge from "../assets/bSponge.jpeg";

import Honey from "../assets/cHotHoney.jpeg";
import Grill from "../assets/cGrill-Fried.jpeg";
import Dutch from "../assets/cDutch Oven Roast.webp";
import Marry from "../assets/cMarry Me.jpeg";
import Fryer from "../assets/cAir Fryer.jpeg";
import Buffalo from "../assets/cBuffalo.jpeg";

import Coffee from "../assets/Coffee.jpeg";
import Chocolate from "../assets/Chocolate milk.jpeg";
import Green from "../assets/Green tea.jpeg";
import Fruit from "../assets/Fruit juice.jpeg";
import Coconut from "../assets/Coconut milk.jpeg";
import Soda from "../assets/Soda.jpeg";

// ----- ALL DISHES -----
const allDishes = [
  { name: "Cheese Pizza", category: "Pizza", price: 8.5, image: Cheese, rating: 4.8, time: "25 min" },
  { name: "Veg Pizza", category: "Pizza", price: 7.5, image: Veg, rating: 4.5, time: "20 min" },
  { name: "Breakfast Pizza", category: "Pizza", price: 7.5, image: Breakfast, rating: 4.5, time: "20 min" },
  { name: "Goat Pizza", category: "Pizza", price: 7.5, image: Goat, rating: 4.5, time: "20 min" },
  { name: "Greek Pizza", category: "Pizza", price: 7.5, image: Greek, rating: 4.5, time: "20 min" },
  { name: "Mushroom Pizza", category: "Pizza", price: 7.5, image: Mushroom, rating: 4.5, time: "20 min" },

  { name: "Beef Burger", category: "Burger", price: 6.0, image: Beef, rating: 5.0, time: "15 min" },
  { name: "Croissant Burger", category: "Burger", price: 5.5, image: Croissant, rating: 4.9, time: "18 min" },
  { name: "CheeseB Burger", category: "Burger", price: 6.0, image: CheeseB, rating: 5.0, time: "15 min" },
  { name: "Bacon Burger", category: "Burger", price: 6.0, image: Bacon, rating: 5.0, time: "15 min" },
  { name: "Chicken Burger", category: "Burger", price: 6.0, image: Chicken, rating: 5.0, time: "15 min" },
  { name: "Onion Burger", category: "Burger", price: 6.0, image: Onion, rating: 5.0, time: "15 min" },

  { name: "Croissant", category: "Bakery", price: 3.0, image: Croissant, rating: 4.7, time: "10 min" },
  { name: "Brownie", category: "Bakery", price: 3.0, image: Brownie, rating: 4.7, time: "10 min" },
  { name: "Muffins", category: "Bakery", price: 3.0, image: Muffins, rating: 4.7, time: "10 min" },
  { name: "Pretzel", category: "Bakery", price: 3.0, image: Pretzel, rating: 4.7, time: "10 min" },
  { name: "profiteroles", category: "Bakery", price: 3.0, image: profiteroles, rating: 4.7, time: "10 min" },
  { name: "Sponge", category: "Bakery", price: 3.0, image: Sponge, rating: 4.7, time: "10 min" },

  { name: "Honey Chicken", category: "Chicken", price: 3.0, image: Honey, rating: 4.7, time: "10 min" },
  { name: "Grill-Fried Chicken", category: "Chicken", price: 3.0, image: Grill, rating: 4.7, time: "10 min" },
  { name: "Dutch Oven Roast Chicken", category: "Chicken", price: 3.0, image: Dutch, rating: 4.7, time: "10 min" },
  { name: "Marry Me Chicken", category: "Chicken", price: 3.0, image: Marry, rating: 4.7, time: "10 min" },
  { name: "Air Fryer Chicken", category: "Chicken", price: 3.0, image: Fryer, rating: 4.7, time: "10 min" },
  { name: "Buffalo Chicken", category: "Chicken", price: 3.0, image: Buffalo, rating: 4.7, time: "10 min" },

  { name: "Coffee", category: "Drinks", price: 3.0, image: Coffee, rating: 4.7, time: "10 min" },
  { name: "Chocolate milk", category: "Drinks", price: 3.0, image: Chocolate, rating: 4.7, time: "10 min" },
  { name: "Green tea", category: "Drinks", price: 3.0, image: Green, rating: 4.7, time: "10 min" },
  { name: "Fruit juice", category: "Drinks", price: 3.0, image: Fruit, rating: 4.7, time: "10 min" },
  { name: "Coconut milk", category: "Drinks", price: 3.0, image: Coconut, rating: 4.7, time: "10 min" },
  { name: "Soda Drinks", category: "Drinks", price: 3.0, image: Soda, rating: 4.7, time: "10 min" },
];

const CategoryPage = () => {
  const { categoryName } = useParams();

  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = allDishes.filter(
    (dish) => dish.category.toLowerCase() === categoryName.toLowerCase()
  );

  const handleAddToCart = (dish) => {
    setSelectedDish(dish); // open popup
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{categoryName} Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.length > 0 ? (
          dishes.map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <div className="h-40 w-full mb-3 rounded-lg overflow-hidden">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-lg">{dish.name}</h2>
                  <p className="text-yellow-500 text-sm mt-1">
                    {"⭐".repeat(Math.round(dish.rating))} ({dish.rating})
                  </p>
                  <span className="text-gray-700 font-bold">${dish.price.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => handleAddToCart(dish)}
                  className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
                >
                  Order Now
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-2">{dish.time}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items found in this category.</p>
        )}
      </div>

      {/* Popup Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <DeliveryOrderForm dish={selectedDish} onClose={() => setSelectedDish(null)} />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
