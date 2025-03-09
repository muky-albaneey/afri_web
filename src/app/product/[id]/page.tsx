"use client"
import React from 'react'
import { useParams } from "next/navigation";
import Product from '@/components/product/Product';
import SaleCarousel from '@/components/home/sale/Sale';


export default function Product_Home() {

    const params = useParams();

  return (
    <div className='md:px-20'>
      <Product />
    {/* <SaleCarousel /> */}

    </div>
  )
}
