"use client"
import React from 'react'
import { useParams } from "next/navigation";
import Store from '@/components/store/Store';


export default function Product_Home() {

    const params = useParams();

  return (
    <div className='md:px-20'>
      <Store />
    </div>
  )
}
