import { Box, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import { employee } from './data';
import {motion} from 'framer-motion';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
type Props = {}



type flipingcardprops = {
    img:string,
    name:string,
    post:string,
    desc:string,
}



const FlipingCard = ({ img, name, post, desc }: flipingcardprops) => {
  
  return (
    <Box component='div' className='flip-card-container' >
      <Box  component='div' className='flip-card' >
        <Box component='div' className='flip-card-front'>
          <Box component='img' src={img} className='flip-card-img' />
          <Typography variant='h5' className='flip-card-name'>
            {name}
          </Typography>
          <Typography className='flip-card-post'>{post}</Typography>
        </Box>
        <Box component='div' className='flip-card-back'>
         
          <Typography variant='h5' className='flip-card-name'>
            {name}
          </Typography>
          <Typography className='flip-card-post'>{post}</Typography>
          <Typography className='flip-card-desc'>{desc}</Typography>
          <Box component='div' className='flip-card-icon-box'>
            <Facebook className='flip-card-icon'/>
            <Instagram className='flip-card-icon'/>
            <LinkedIn className='flip-card-icon'/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


const Team = (props: Props) => {
  return (
    <Box component='div' className='team-container'>
        <Typography variant='h5' className='about-heading'>Our executive team</Typography>
        <Box component='div' className='team-box'>
            {employee.map((item,index) => (
                <FlipingCard key={index} img={item.img} name={item.name} post={item.post} desc={item.desc
                }/>
            ))}
        </Box>
    </Box>
  )
}

export default Team;