// "use client";
import React from 'react'
import SaleCarousel from '../home/sale/Sale';
import ProductList from './product_cards/ProductList';
import Ads from '../home/ads/Ad';
import Brand from './brands/Brand';
import Newsletter from '../home/newsletter/Newsletter';

export default function Product() {
  return (
    <div className="w-full py-20">
        <div className="w-full py-5 px-14 bg-[#8B4513]"></div>
        <SaleCarousel />
        <div className="w-full py-5 px-14 bg-[#8B4513]"></div>
        <ProductList />
        <Ads />
        <Brand />
        <Newsletter />
    </div>
  )
}
