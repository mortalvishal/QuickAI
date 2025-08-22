import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AITools from '../components/AITools'
import Testimonial from '../components/testimonial'
import Plan from '../components/Plan'

export const Home = () => {
  return (
    <>
       <Navbar/>
       <Hero/>
       <AITools/>
       <Testimonial/>
       <Plan/>
    </>
  )
}
