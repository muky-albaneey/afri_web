import Ads from '@/components/home/ads/Ad'
import OrderConfirmation from '@/components/order/OrderConfirmation'
import ProductList from '@/components/order/ProductList'
import React from 'react'

export default function order_confirm() {
  return (
    <div className='py-20 px-4 md:px-10'>
      <OrderConfirmation />
      <ProductList />
      <Ads />
    </div>
  )
}
