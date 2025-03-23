import AppDownloadSection from '@/components/home/ads/AppDownloadSection'
import Dashboard from '@/components/user/Dashboard'
import React from 'react'

export default function profile() {
  return (
    <div className='py-24'>
        <Dashboard />
        <AppDownloadSection />
    </div>
  )
}
