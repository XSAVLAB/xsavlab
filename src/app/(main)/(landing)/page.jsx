import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CssBaseline  from '@mui/material/CssBaseline'
import React from 'react'
import Hero from './_components/Hero'

import Galery from './_components/Galery'
import Cases from './_components/Cases'
import ConatctForm from '../components/ConatctForm'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'

const page = () => {
  return (
    <CssBaseline>
        <Navbar/>
        <Hero/>
        <Services/>
        <Galery/>
        <Cases/>
        <Testimonials/>
        <ConatctForm/>
        <Footer/>
    </CssBaseline>
  )
}

export default page