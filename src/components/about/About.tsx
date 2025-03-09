import React from 'react'
import AboutHeroSection from './hero/AboutHero'
import Message from './about_message/Message'
import Stats from '../home/stat/Stat'
import Showcase from './showcase/Showcase'
import MissionVision from './mission/MissionVision.js'
import Culture from './culture/Culture'

export default function About() {
  return (
    <div className="w-full py-20">
      <AboutHeroSection />
      <Message />
      <div className=''>
        <Stats bg='#FFFFFF' />
      </div>
      <Showcase />
      <MissionVision />
      <Culture />
    </div>
  )
}
