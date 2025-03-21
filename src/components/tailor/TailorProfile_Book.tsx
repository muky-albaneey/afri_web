"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TestimonialCarouselTailor from './Testimony';

const testimonials = [
  {
    id: 1,
    name: 'Moyin odunlayo',
    review: 'Exceptional Service, My suit fits Perfectly!',
    rating: 5,
    avatar: '/path-to-avatar.jpg', // Replace with the actual path to the image
  },
  {
    id: 2,
    name: 'John Doe',
    review: 'Amazing experience! Highly recommend.',
    rating: 5,
    avatar: '/path-to-avatar.jpg', // Replace with the actual path to the image
  },
];

export default function BookingGuide() {
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // const carouselRef = useRef<HTMLDivElement>(null);
  // const [slideWidth, setSlideWidth] = useState(0);  // Dynamically calculate slide width
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  // const [slideWidth, setSlideWidth] = useState(0);

  // useEffect(() => {
  //   if (carouselRef.current) {
  //     setSlideWidth(carouselRef.current.offsetWidth);
  //   }

  //   const handleResize = () => {
  //     if (carouselRef.current) {
  //       setSlideWidth(carouselRef.current.offsetWidth);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const handleNext = () => {
  //   setCurrentTestimonial((prev) =>
  //     prev === testimonials.length - 1 ? 0 : prev + 1
  //   );
  // };

  // const handlePrev = () => {
  //   setCurrentTestimonial((prev) =>
  //     prev === 0 ? testimonials.length - 1 : prev - 1
  //   );
  // };


  return (
    <div className="w-full container mx-auto px-4 py-12">
      {/* Booking Guide Section */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Booking, Ordering And Delivery Guide
        </h2>
        <p className="text-gray-600 mb-4">
          Experience the Perfect fit with our tailoring services. Schedule your appointment now!
        </p>
        <p className="text-sm text-brown-500 mb-4">
          Follow this steps to ensure a smooth experience
        </p>
        <button className="bg-brown-600 text-white px-6 py-2 rounded-md hover:bg-brown-700 transition">
          Book Appointment
        </button>
      </div>

      {/* Steps Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="text-center">
          <h3 className="font-semibold text-lg">Step 1: Book your Appointment</h3>
          <p className="text-gray-500 mt-2">
            Learn how to easily schedule your appointment with our intuitive system
          </p>
          <img
            src="/path-to-image1.jpg" // Replace with actual path
            alt="Booking"
            className="w-full h-48 object-cover mt-4 rounded-md"
          />
          <p className="text-sm text-gray-400 mt-2">Step 1 of 3</p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <h3 className="font-semibold text-lg">Step 2: Place your Order</h3>
          <p className="text-gray-500 mt-2">
            Explore our variety of product and place your order seamlessly
          </p>
          <img
            src="/path-to-image2.jpg" // Replace with actual path
            alt="Order"
            className="w-full h-48 object-cover mt-4 rounded-md"
          />
          <p className="text-sm text-gray-400 mt-2">Step 2 of 3</p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <h3 className="font-semibold text-lg">Step 3: Track your Delivery</h3>
          <p className="text-gray-500 mt-2">
            Understand the delivery schedule and track your order in real time
          </p>
          <div className="w-full h-48 object-cover mt-4 rounded-md">
          <Image
            src="/path-to-image3.jpg" // Replace with actual path
            alt="Delivery"
            width={200}
            height={100}
          />
          </div>
          
          <p className="text-sm text-gray-400 mt-2">Step 3 of 3</p>
          <button className="bg-brown-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-brown-700 transition">
            Track order
          </button>
        </div>
      </div>

    <TestimonialCarouselTailor />
    </div>
  );
}
