"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-baseline ">
        {/* Cart Section */}
        <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <div className="border border-[#E4E7EC] rounded-lg p-4">
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
          <div className="mt-6 shadow-md rounded-lg p-4 ">
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
            <div className="mb-4 flex flex-col gap-4 mt-12">
              {/* <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className='bg-amber-700'
                />
                Debit or Credit Card
              </label> */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="hidden"
                  />
                  <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${paymentMethod === 'card' ? 'bg-[#603813] border-[#603813]' : 'border-gray-400'}`}>
                    {paymentMethod === 'card' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </div>
                  <span className="text-black">Debit or Credit Card</span>
                </label>

                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                    className="hidden"
                  />
                  <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${paymentMethod === 'cash' ? 'bg-[#603813] border-[#603813]' : 'border-gray-400'}`}>
                    {paymentMethod === 'cash' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </div>
                  <span className="text-black">Pay on Delivery</span>
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
