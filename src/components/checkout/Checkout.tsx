"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-baseline ">
        {/* Cart Section */}
        <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            {/* Cart Items */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-start gap-4 border-b border-[#E4E7EC] py-4">
                <div className="w-16 h-16 rounded-lg">
                    <Image src="/ankara.svg" alt="" width={100} height={100} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Ankara</h3>
                  <p className="text-gray-500 text-sm">Color: Black</p>
                  <p className="text-gray-500 text-sm">Size: Medium</p>
                </div>
                <p className="font-bold">N1000</p>
              </div>
            ))}
          </div>

          {/* Delivery Information */}
          <div className="mt-6 bg-white shadow-md rounded-lg p-4 ">
            <h2 className="text-lg font-semibold mb-4">Delivery Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-lg mt-1 border-[#0000001A]"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Last Name</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-lg mt-1 border-[#0000001A]"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Mobile Number</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-lg mt-1 border-[#0000001A]"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email Address</label>
                <input
                  type="email"
                  className="w-full border p-2 rounded-lg mt-1 border-[#0000001A]"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">City/Town</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-lg mt-1 border-[#0000001A]"
                  placeholder="Enter city/town"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Zip Code</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-lg mt-1 border-[#0000001A]"
                  placeholder="Enter zip code"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-600">Address</label>
              <textarea
                className="w-full border p-2 rounded-lg mt-1 border-[#0000001A]"
                placeholder="Enter address"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Order Payment Section */}
        <div className='relative md:top-14'>
          <div className="bg-white shadow-md rounded-lg p-4 ">
            <h2 className="text-lg font-semibold mb-4">Order Payment</h2>

            {/* Payment Options */}
            <div className="mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                Debit or Credit Card
              </label>
              <label className="flex items-center gap-2 mt-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                />
                Pay on Delivery
              </label>
            </div>

            {/* Card Details */}
            {paymentMethod === 'card' && (
              <div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter Card Name"
                    className="w-full border p-2 rounded-lg border-[#0000001A]"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter Card Number"
                    className="w-full border p-2 rounded-lg border-[#0000001A]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full border p-2 rounded-lg border-[#0000001A]"
                  />
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="w-full border p-2 rounded-lg border-[#0000001A]"
                  />
                </div>
              </div>
            )}

            {/* Payment Summary */}
            <div className="mt-6">
              <div className="flex justify-between mb-1">
                <span>Items</span>
                <span>9</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Subtotal</span>
                <span>$565</span>
              </div>
              <div className="flex justify-between mb-1 text-red-500">
                <span>Discount (-20%)</span>
                <span>-$113</span>
              </div>
              <div className="flex justify-between font-bold mt-3">
                <span>Total</span>
                <span>$467</span>
              </div>
            </div>

            {/* Proceed Button */}
            <button className="mt-6 w-full bg-[#8B4513] text-white py-2 rounded-lg hover:bg-brown-700">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
