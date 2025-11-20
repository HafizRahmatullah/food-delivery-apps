import React, { useState } from "react";

export default function DeliveryOrderForm({ dish, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    note: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dish) return alert("No dish selected!");

    // Prepare WhatsApp message
    const message = `*New Order*%0A
*Item:* ${dish.name}%0A
*Price:* $${dish.price}%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Address:* ${formData.address}, ${formData.city}%0A
*Notes:* ${formData.note}%0A
*Payment:* ${formData.payment}`;

    const whatsappNumber = "923176922354"; // Pakistan number with country code
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // Close modal
    onClose();
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg w-[500px] relative">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
      >
        ×
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
        Delivery Order Form
      </h2>

      {/* Selected Item */}
      {dish && (
        <div className="mb-2 p-2 bg-gray-100 rounded-lg border">
          <p className="font-semibold">Selected Item:</p>
          <p className="text-gray-700">{dish.name}</p>
        </div>
      )}

      {/* Dish Info */}
      <div className="mb-3 p-2 bg-gray-100 rounded-lg">
        <p className="font-bold text-gray-800">{dish?.name}</p>
        <p className="text-gray-700">Price: ${dish?.price}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="font-semibold">Customer Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-1.5 border rounded-lg"
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
            className="w-full px-3 py-1.5 border rounded-lg"
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
            className="w-full px-3 py-1.5 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="font-semibold">City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-1.5 border rounded-lg"
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
            className="w-full px-3 py-1.5 border rounded-lg"
          />
        </div>

        <div>
          <label className="font-semibold">Payment Method</label>
          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="w-full px-3 py-1.5 border rounded-lg"
          >
            <option>Cash on Delivery</option>
            <option>JazzCash</option>
            <option>EasyPaisa</option>
            <option>Credit Card</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
