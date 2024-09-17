'use client';

import React from 'react'
import Service from '../common/Service';
import Box  from '@mui/material/Box';
import Testimonals from '../common/Testimonals';
import Slider from '../common/Slider';
import Hero from './components/Hero';
import Product from './components/Product';
import Cases from './components/Cases';
import Contact from '../common/Contact';


const page = () => {
  return (
    <Box >
      <Hero/>
      <Service/>
      <Product/>
      <Testimonals/>
      <Slider/>
      <Cases/> 
    
    </Box>
  )
}

export default page;