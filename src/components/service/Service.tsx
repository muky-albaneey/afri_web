import React from 'react'
import Feature from './featured/Feature'
import Ads from '../home/ads/Ad'

export default function Service() {
  return (
    <div className="w-full py-20">
        <div className="w-full py-35 px-14 bg-[#8B4513] flex justify-center items-center">
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Services</h1>
        </div>
        <p className='w-full md:text-1xl text-center md:text-left'>
            At Afrigora, we provide a comprehensive range of services to empower shop owners, tailors, and artisans across Africa. Our goal is to connect businesses with their customers seamlessly while fostering creativity, innovation, and growth.
        </p>
        <Feature />
        <Ads />
    </div>
  )
}
