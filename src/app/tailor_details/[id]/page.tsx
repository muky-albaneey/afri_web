import AppDownloadSection from '@/components/home/ads/AppDownloadSection'
import ProductDetail from '@/components/tailor/tailor_home/Details'
import RelatedProducts from '@/components/tailor/tailor_home/RelatedProducts'
import React from 'react'

export default function TailorDetails() {
  return (
    <div className='py-20'>
      <ProductDetail />
      <RelatedProducts />
      <AppDownloadSection />

    </div>
  )
}
