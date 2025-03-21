import TailorProfile from '@/components/tailor/Profile'
import BookingGuide from '@/components/tailor/TailorProfile_Book'
import React from 'react'

export default function tailor_profile() {
  return ( 
    <div className='py-20'>
      <TailorProfile />
      <BookingGuide />
    </div>
  )
}
