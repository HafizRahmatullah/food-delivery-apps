// src/components/DiscountBanner.jsx
import React from 'react';
import girl from '../assets/girl.jpeg';


const DiscountBanner = () => (
    <div className="relative w-full h-40 bg-go-meal-primary rounded-xl overflow-hidden p-6 flex justify-between items-center shadow-lg mb-8">
        {/* Text Content */}
        <div>
            <h2 className="text-3xl font-bold text-white leading-tight">Get Discount Voucher</h2>
            <h3 className="text-4xl font-extrabold text-white leading-none">Up To 20%</h3>
            <p className="text-sm text-white mt-2 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
        </div>
        
        {/* Image Placeholder - Positioned absolutely to match the design */}
        {/* NOTE: Replace 'path/to/image.png' with your actual image file path */}
        <div className="absolute right-0 bottom-0 h-full w-full">
            <img 
                src={girl}
                alt="Happy woman with food" 
                className="h-full w-full object-cover" 
            />
        </div>
    </div>
);

export default DiscountBanner;