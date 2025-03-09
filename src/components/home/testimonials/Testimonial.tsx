"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
  { id: 1, name: "Moyin Odunlayo", image: "/profile.svg", rating: 5, review: "Afrogora is amazing! Afrogora has transformed myshopping experience. I love the diverse range of products and the seamless delivery services!" },
  { id: 2, name: "John Doe", image: "/profile.svg", rating: 4, review: "Great shopping experience.Afrogora has transformed myshopping experience. I love the diverse range of products and the seamless delivery services!" },
  { id: 3, name: "Jane Smith", image: "/profile.svg", rating: 5, review: "Fast delivery and great service! Afrogora has transformed myshopping experience. I love the diverse range of products and the seamless delivery services!" },
  { id: 4, name: "Alice Brown", image: "/profile.svg", rating: 5, review: "Superb product quality! Afrogora has transformed myshopping experience. I love the diverse range of products and the seamless delivery services!" },
  { id: 5, name: "Charlie White", image: "/profile.svg", rating: 4, review: "Very user-friendly platform.Afrogora has transformed myshopping experience. I love the diverse range of products and the seamless delivery services!" },
  { id: 6, name: "Daniel Green", image: "/profile.svg", rating: 5, review: "Absolutely love Afrogora! Afrogora has transformed myshopping experience. I love the diverse range of products and the seamless delivery services!" },
  { id: 7, name: "Eve Black", image: "/profile.svg", rating: 5, review: "Highly recommend this platform.Afrogora has transformed myshopping experience. I love the diverse range of products and the seamless delivery services!" },
  { id: 8, name: "Frank Blue", image: "/profile.svg", rating: 5, review: "Top-notch service and quality! Afrogora has transformed myshopping experience. I love the diverse range of products and the seamless delivery services!" },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 3;

  // Calculate the number of slides needed (Each row has 3 testimonials)
  const totalSlides = Math.ceil(testimonials.length / itemsPerRow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="px-3 flex flex-col gap-3">
      {/* Desktop Layout (md and up: 3 columns per row) */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {testimonials.slice(0, 3).map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
      <div className="hidden md:grid grid-cols-2 gap-6 justify-center px-10">
        {testimonials.slice(3, 5).map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
      <div className="hidden md:grid grid-cols-3 gap-6">
        {testimonials.slice(5, 8).map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>

      {/* Mobile Layout: One Testimonial per Row, Controlled by Carousel */}
      <div className="md:hidden">
        {[0, 1, 2].map((row) => (
          <div key={row} className="grid grid-cols-1 gap-6 mb-3 mt-2">
            <TestimonialCard {...testimonials[(currentIndex * itemsPerRow + row) % testimonials.length]} />
          </div>
        ))}
      </div>

      {/* Custom Controls */}
      <div id="control" className="w-full flex justify-center md:justify-end items-center">
        <button onClick={prevSlide} className="p-2 rounded-full">
          <IoIosArrowBack size={24} />
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <LuDot
              key={index}
              className={`cursor-pointer ${
                index === currentIndex ? "text-black" : "text-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="p-2 rounded-full">
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
}

const TestimonialCard = ({ name, image, rating, review }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border-[0.01px] flex flex-col items-start space-y-4">
    <div className="flex items-center space-x-4">
      <Image src={image} alt={name} width={50} height={50} className="rounded-full" />
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex text-[#FFFF26]">
          {[...Array(rating)].map((_, i) => (
            <AiFillStar key={i} />  
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-700 mx-12">{review}</p>
  </div>
);
