'use client';
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Moyin odunlayo',
    review: 'Exceptional Service, My suit fits Perfectly!',
    rating: 5,
    avatar: '/images/avatar1.jpg',
  },
  {
    id: 2,
    name: 'John Doe',
    review: 'Amazing experience! Highly recommend.',
    rating: 5,
    avatar: '/images/avatar2.jpg',
  },
];

export default function TestimonialCarouselTailor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (carouselRef.current) {
        setSlideWidth(carouselRef.current.offsetWidth);
      }
    };

    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);

    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title */}
      <h3 className="text-center font-bold text-xl md:text-2xl mb-6">
        Hear From Our Awesome Customers
      </h3>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0"
              style={{ width: `${slideWidth}px` }}
            >
              <div className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={handlePrev}
          className="bg-[#79492c] text-white p-3 rounded-full shadow-md hover:bg-[#5e3520] transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#79492c] text-white p-3 rounded-full shadow-md hover:bg-[#5e3520] transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
