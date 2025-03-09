import { IoIosArrowForward } from "react-icons/io"; 
import { HiLocationMarker } from "react-icons/hi"; 
import React from 'react'
import StoreList from './store_list/StoreList'
import Testimonial from '../home/testimonials/Testimonial'
import AccordionComponent from '../home/accordion/Accordion'

export default function Store() {
  return (
    <div className="w-full py-20">
      <header className='w-full flex justify-between px-4 '>
        <section className='flex justify-between items-center md:w-[25%] w-[55%]'>
          <span className="flex justify-center items-center">Stores <IoIosArrowForward /></span>
          <h3>House of fashions</h3>
        </section>
        <section className='flex  w-[25%] justify-center items-center'>
          <HiLocationMarker />
          Nigeria
        </section>
      </header>
      <div className="w-full py-25 md:py-35  px-14 bg-[#8B4513] flex justify-center items-center">
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Store</h1>
      </div>
      <StoreList />
      <Testimonial />
      <AccordionComponent />
    </div>
  )
}
