import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
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