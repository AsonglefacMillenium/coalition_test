import React from 'react'
import './home.css'
import { HeroSection, HistorySection, ScheduleSection } from '../sections'
import { Footer } from '../components'

const Home = () => {
  return (
    <div className='home'>
        <HeroSection />
        <HistorySection />
        <ScheduleSection />
        <Footer />
    </div>
  )
}

export default Home