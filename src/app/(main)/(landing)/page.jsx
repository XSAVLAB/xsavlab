import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import CssBaseline  from '@mui/material/CssBaseline'
import React from 'react'
import Hero from './_components/Hero'
import Services from '@/app/components/Services'
import Galery from './_components/Galery'
import Cases from './_components/Cases'
import ConatctForm from '@/app/components/ConatctForm'
import Testimonials from '@/app/components/Testimonials'

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