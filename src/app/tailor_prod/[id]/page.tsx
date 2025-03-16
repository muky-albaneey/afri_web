import AppDownloadSection from '@/components/home/ads/AppDownloadSection'
import ProductsPage from '@/components/tailor/tailor_home/TailorProd'
import React from 'react'

export default function TailorProd() {
  return (
    <div className='py-20 md:px-44 '>
      <ProductsPage />
      <AppDownloadSection />
    </div>
  )
}
