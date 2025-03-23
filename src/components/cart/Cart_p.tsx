'use client';

import { useState } from 'react';
import Image from 'next/image';

const Cart = () => {
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');

  const handleDeliveryChange = (method: 'pickup' | 'delivery') => {
    setDeliveryMethod(method);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cart Section */}
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Cart Items */}
        <div className="lg:col-span-2">
          <div className=" border border-[#ADADAD66] rounded-lg p-6">
            <div className="flex justify-between items-center pb-4">
              <h2 className="text-xl font-semibold">Cart</h2>
              <span className="bg-brown-600 text-white rounded-full px-3 py-1 text-sm">4</span>
            </div>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center border-b border-[#ADADAD66] py-4">
                <div className="w-16 h-16 overflow-hidden rounded-md">
                  <Image
                    src="/product-image.png"
                    alt="Ankara"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold">Ankara</h3>
                  <p className="text-sm text-gray-500">
                    Color: Black <br />
                    Size: Medium
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">N1000</p>
                  <p className="text-gray-500">N1000</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {/* Delivery Method */}
          <div className="flex flex-col items-baseline space-x-4">
                <button
                    onClick={() => handleDeliveryChange('pickup')}
                    className={`flex-1 flex items-center justify-center py-2  rounded-full text-sm ${
                    deliveryMethod === 'pickup'
                        ?  'text-[#8B4513]'
                        : ' text-gray-500'
                    }`}
                >
                    <span
                    className={`w-4 h-4 mr-2 border rounded-full ${
                        deliveryMethod === 'pickup'
                        ? 'bg-[#8B4513] border-[#8B4513]'
                        : 'border-gray-300 bg-white'
                    }`}
                    />
                    Pickup
                </button>
        
                <button
                    onClick={() => handleDeliveryChange('delivery')}
                    className={`flex-1 flex items-center justify-center py-2  rounded-full text-sm ${
                    deliveryMethod === 'delivery'
                        ? '  text-[#8B4513]'
                        : ' text-gray-500'
                    }`}
                >
            <span
            className={`w-4 h-4 mr-2 border rounded-full ${
                deliveryMethod === 'delivery'
                ? 'bg-[#8B4513] border-[#8B4513]'
                : 'border-gray-300 bg-white'
            }`}
            />
            Delivered to your place
        </button>
    </div>  

          {/* Order Details */}
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Items</span>
              <span>9</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">$565</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>-$113</span>
            </div>
            <div className="flex justify-between font-semibold text-2xl">
              <span>Total</span>
              <span className="text-lg">$467</span>
            </div>
          </div>
          {/* Payment Button */}
          <button className="mt-6 w-full bg-[#8B4513] text-white py-3 rounded-md hover:bg-brown-700">
            Proceed to payment
          </button>
        </div>
      </div>

      {/* Promotions */}
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
