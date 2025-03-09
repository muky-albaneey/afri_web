'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // ✅ Correct import
import 'swiper/css';
import 'swiper/css/navigation';

import ProductSimilarCard from '../product_cards/SimilarCard';

const products = [
  {
    imgSrc: '/ankara.svg',
    title: 'Ankara',
    price: '12,000',
    rating: 4,
    reviews: 91,
  },
  {
    imgSrc: '/ankara.svg',
    title: 'Ankara',
    price: '12,000',
    rating: 4,
    reviews: 91,
  },
  {
    imgSrc: '/ankara.svg',
    title: 'Ankara',
    price: '12,000',
    rating: 4,
    reviews: 91,
  },
  {
    imgSrc: '/ankara.svg',
    title: 'Ankara',
    price: '12,000',
    rating: 4,
    reviews: 91,
  },
];

const SimilarProductList = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">Similar Items You Might Like</h2>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation // ✅ Enable arrows
          modules={[Navigation]} // ✅ Register Navigation module
          className="my-4"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductSimilarCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden grid grid-cols-2 gap-2">
        {products.map((product, index) => (
          <ProductSimilarCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProductList;
