"use client"; 
import { IoIosArrowForward } from "react-icons/io"; 
import { IoIosArrowBack } from "react-icons/io"; 
// Ensures this runs in the client-side

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Sallah Sales",
    description: "Explore our collection of cultural wears",
    image1: "/sale2.svg",
    image2: "/sale-gift.svg",
  },
  {
    title: "Christmas Sales",
    description: "Explore our collection of cultural wears",
    image1: "/sale2.svg",
    image2: "/images.jpeg",
  },
];

const SaleCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-4xl">
        <div className="hidden w-full bg-[#E5D2C1] rounded-xl md:flex flex-col md:flex-row items-center md:items-start px-6 py-8 md:p-10 gap-6 md:mb-3.5">
          {/* Left Image */}
          <div className="hidden md:flex justify-center w-1/3">
            <Image src={slides[current].image1} width={150} height={150} alt="Sale Gift" />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">{slides[current].title}</h2>
            <p className="text-gray-700 mt-2">{slides[current].description}</p>
            <button className="mt-4 bg-[#8B4513] text-white px-5 py-2 rounded-md">Shop Now</button>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-center w-1/3">
            <Image src={slides[current].image2} width={150} height={150} alt="Sale Woman" />
          </div>
        </div>

        {/* Mobile Layout Images */}
        <div className="md:hidden flex flex-col items-center mt-6 gap-4">
          <Image src={slides[current].image2} width={150} height={150} alt="Sale Woman" />
          <Image src={slides[current].image1} width={150} height={150} alt="Sale Gift" />
        </div>


               {/* Mobile Sale Card */}
               <div className="md:hidden w-full max-w-sm bg-[#E5D2C1] rounded-xl p-6 flex flex-col items-center text-center m-auto mt-4">
            <h2 className="text-xl font-bold">{slides[current].title}</h2>
            <p className="text-gray-700 mt-2 underline">{slides[current].description}</p>
            <button className="mt-6 bg-[#8B4513] text-white px-5 py-3 rounded-md w-full font-semibold">
                Button
            </button>
        </div>

        {/* Navigation Buttons */}
        
        <div className="flex justify-center ">
        <button
  className="  text-black p-2 rounded-full z-10"
  onClick={prevSlide}
>
  <IoIosArrowBack />
</button>

        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === current ? "bg-[#8B4513]" : "bg-gray-300"}`}
            />
          ))}
        </div>
        <button
  className="text-black p-2 rounded-full z-10"
  onClick={nextSlide}
>
  <IoIosArrowForward />
</button>

        </div>
      </div>
    </div>
  );
};

export default SaleCarousel;
