"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
  { id: 1, name: "Moyin Odunlayo", image: "/profile.jpg", rating: 5, review: "Afrogora is amazing!" },
  { id: 2, name: "John Doe", image: "/profile.jpg", rating: 4, review: "Great shopping experience." },
  { id: 3, name: "Jane Smith", image: "/profile.jpg", rating: 5, review: "Fast delivery and great service!" },
  { id: 4, name: "Alice Brown", image: "/profile.jpg", rating: 5, review: "Superb product quality!" },
  { id: 5, name: "Charlie White", image: "/profile.jpg", rating: 4, review: "Very user-friendly platform." },
  { id: 6, name: "Daniel Green", image: "/profile.jpg", rating: 5, review: "Absolutely love Afrogora!" },
  { id: 7, name: "Eve Black", image: "/profile.jpg", rating: 5, review: "Highly recommend this platform." },
  { id: 8, name: "Frank Blue", image: "/profile.jpg", rating: 5, review: "Top-notch service and quality!" },
];

const CustomArrow = ({ direction, onClick }: { direction: "prev" | "next"; onClick?: () => void }) => (
  <button className={`custom-arrow ${direction} p-2 rounded-full text-sm transition`} onClick={onClick}>
    {direction === "prev" ? "◀" : "▶"}
  </button>
);

export default function Testimonial() {
  const swiperRef = useRef<any>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      setSwiperReady(true);
    }
  }, []);

  return (
    <div className="py-12 bg-white relative">
      <h2 className="text-3xl font-bold text-center mb-8">What people say about us</h2>
      <div className="max-w-6xl mx-auto relative px-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          className="pb-12"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {/* First Slide: 3 cards */}
          <SwiperSlide>
            <div className="grid grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </SwiperSlide>

          {/* Second Slide: 2 cards (Centered using flex justify-center) */}
          <SwiperSlide>
            <div className="grid grid-cols-2 gap-6 justify-center">
              {testimonials.slice(3, 5).map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </SwiperSlide>

          {/* Third Slide: 3 cards */}
          <SwiperSlide>
            <div className="grid grid-cols-3 gap-6">
              {testimonials.slice(5, 8).map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation & Pagination Container */}
        <div className="flex items-center justify-end space-x-6 relative">
          {swiperReady && <CustomArrow direction="prev" onClick={() => swiperRef.current?.slidePrev()} />}
          <div className="swiper-pagination flex justify-end right-10"></div>
          {swiperReady && <CustomArrow direction="next" onClick={() => swiperRef.current?.slideNext()} />}
        </div>
      </div>
    </div>
  );
}

const TestimonialCard = ({ name, image, rating, review }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border flex flex-col items-start space-y-4">
    <div className="flex items-center space-x-4">
      <Image src={image} alt={name} width={50} height={50} className="rounded-full" />
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <AiFillStar key={i} />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-700">{review}</p>
  </div>
);
