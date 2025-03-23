"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Ankara', color: 'Black', size: 'Medium', price: 1000, quantity: 1 },
    { id: 2, name: 'Ankara', color: 'Black', size: 'Medium', price: 1000, quantity: 1 },
    { id: 3, name: 'Ankara', color: 'Black', size: 'Medium', price: 1000, quantity: 1 },
    { id: 4, name: 'Ankara', color: 'Black', size: 'Medium', price: 1000, quantity: 1 },
  ]);

  const handleQuantityChange = (id: number, amount: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const total = subtotal - discount;

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Cart Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section - Cart Items */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <div className="border border-[#E4E7EC] p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Cart</span>
              <span className="bg-brown-600 text-white px-2 py-1 rounded-full text-sm">
                {items.length}
              </span>
            </div>
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-[#E4E7EC] py-4">
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <Image
                    src="/product.png"
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-gray-500 text-sm">Color: {item.color}</p>
                    <p className="text-gray-500 text-sm">Size: {item.size}</p>
                    <p className="font-semibold mt-2">N{item.price}</p>
                  </div>
                </div>

                {/* Quantity & Remove */}
                <div className="flex flex-col items-center gap-2">
                <button onClick={() => handleRemove(item.id)}>
                    <Image src='/close-square.svg' alt='' width={20} height={20} />
                  </button>
                  <div className="flex w-full">
                  <button
                    className="w-6 h-6 bg-[#8B4513] text-white rounded-lg"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="w-6 h-6 bg-[#8B4513] text-white rounded-lg"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="border border-[#E4E7EC] p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span className="font-semibold">{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span className="font-semibold">N{subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount (-20%)</span>
              <span className="text-red-500">-N{discount}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>N{total}</span>
            </div>

            {/* Promo Code */}
            <div className="flex mt-4 gap-2">
              <input
                type="text"
                className="w-full px-2 py-1 bg-[#F0F0F0] rounded-lg"
                placeholder="Add promo code"
              />
              <button className="bg-[#8B4513] text-white px-4 rounded-lg">
                Apply
              </button>
            </div>

            {/* Proceed Button */}
           
          </div>
          <button className="w-full bg-[#8B4513] text-white py-2 mt-4 rounded-lg">
              Proceed to payment
            </button>
        </div>
      </div>

      {/* Promotions Section */}
      <div className="flex items-center justify-between mt-6 bg-gradient-to-r from-[#C5A289] to-[#FFF7CC] p-6 rounded-lg text-center">
        <Image src='/bill.svg' alt='' width={64} height={64} />
        <p className='text-2xl text-left'>
          <span className="text-[#F60C0CCF] font-bold">3 promotions</span> in your cart! Click to view exclusive deals and save more!
        </p>
        <button className="mt-4 px-6 py-2 border rounded-lg w-3xs">
          View More
        </button>
      </div>
    </div>
  );
};

export default Cart;
