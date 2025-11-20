import React, { useState } from "react";

export default function OrderFormModal({ dish, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    note: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Info:", formData, "Dish:", dish);
    alert("Order Submitted Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Delivery Order Form</h2>

        {/* Selected Dish */}
        {dish && (
          <div className="mb-3 p-3 bg-gray-100 rounded-lg border">
            <p className="font-semibold">Selected Item:</p>
            <p className="text-gray-700">{dish.name}</p>
            <p className="text-gray-700 font-bold">Price: ${dish.price}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-semibold">Customer Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="03XX-XXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Address</label>
            <textarea
              name="address"
              rows="2"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="font-semibold">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="">Select City</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Peshawar">Peshawar</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Additional Notes</label>
            <textarea
              name="note"
              rows="2"
              value={formData.note}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="font-semibold">Payment Method</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option>Cash on Delivery</option>
              <option>JazzCash</option>
              <option>EasyPaisa</option>
              <option>Credit Card</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
