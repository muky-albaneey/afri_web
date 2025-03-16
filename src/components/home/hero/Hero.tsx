// pages/index.js
"use client";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className="bg-[#F8F5F2] min-h-screen flex items-center justify-center px-6">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1D1D1D] leading-tight">
          <TypeAnimation
              sequence={[
                'We Celebrate Tradition,',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Re imagine Legacy',
                1000,
                'Revive the Classics',
                1000,
                'Keep Customs Alive',
                1000
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
          />
           <br /> <span className="text-[#1D1D1D]">Redefined for <span className="">Today</span></span>
          </h1>
          <p className="text-[#6B6B6B] mt-4 text-lg">
            Discover our handcrafted native wear, blending timeless culture with contemporary design
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#8B4513] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#8B4513] transition">
              View Stores
            </button>
            <button className="border border-[#8B4513] text-[#8B4513] px-6 py-3 rounded-lg font-medium hover:bg-[#8B4513] hover:text-white transition">
              Explore
            </button>
          </div>

          {/* Customers */}
          <div className="mt-8 flex items-center justify-center lg:justify-start">
            {/* Profile Images */}
            <div className="flex">
              <Image src="/cus1.png" alt="Customer 1" width={40} height={40} className="rounded-full border-2 border-white -ml-2 first:ml-0" />
              <Image src="/cus2.png" alt="Customer 2" width={40} height={40} className="rounded-full border-2 border-white -ml-2" />
              <Image src="/cus3.png" alt="Customer 3" width={40} height={40} className="rounded-full border-2 border-white -ml-2" />
              <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full -ml-2 text-sm font-medium">
                +300k
              </div>
            </div>

            <p className="ml-3 text-lg font-medium text-[#1D1D1D]">Customers</p>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1">
          <Image
            src="/hero.svg"
            alt="Fashion Designer"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
