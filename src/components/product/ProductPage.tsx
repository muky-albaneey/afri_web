import React from 'react'
import Product_detail from './product_detail/Product_detail'
import Testimonial from '../home/testimonials/Testimonial'
import SimilarProductList from './product_detail/SimilarProduct'

export default function ProductPage() {
  return (
    <div className="w-full py-20">
      <Product_detail/> 
      <SimilarProductList />
      <Testimonial />
    </div>
  )
}
