import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Testimonials from '@/app/components/Testimonials'
import { CssBaseline } from '@mui/material'
import React from 'react'
import Hero from './Hero'
import Values from './Values'

const page = () => {
  return (
    <CssBaseline>
        <Navbar/>
        <Hero/>
        <Values/>
        <Testimonials/>
        <Footer/>
    </CssBaseline>
  )
}

export default page