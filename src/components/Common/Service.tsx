'use client';

import  Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box  from '@mui/material/Box'
import {FC} from 'react'
import Button from '@mui/material/Button'
import ArrowLeft from '../../../public/svgs/ArrowLeft'


const data=[
    {
        img:'/images/webdevelopment.jpeg',
        title:'Web Development',
        tech:['React','Django','Flutter','Anjular'],
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi consequuntur dignissimos ducimus laboriosam hic dolorem illo dolorum porro vero numquam!',

    },
    {
        img:'/images/webdevelopment.jpeg',
        title:'Web Development',
        tech:['React','Django','Flutter','Anjular'],
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi consequuntur dignissimos ducimus laboriosam hic dolorem illo dolorum porro vero numquam!',

    },
    {
        img:'/images/webdevelopment.jpeg',
        title:'Web Development',
        tech:['React','Django','Flutter','Anjular'],
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi consequuntur dignissimos ducimus laboriosam hic dolorem illo dolorum porro vero numquam!',

    },
    {
        img:'/images/webdevelopment.jpeg',
        title:'Web Development',
        tech:['React','Django','Flutter','Anjular'],
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi consequuntur dignissimos ducimus laboriosam hic dolorem illo dolorum porro vero numquam!',

    },
    {
        img:'/images/webdevelopment.jpeg',
        title:'Web Development',
        tech:['React','Django','Flutter','Anjular'],
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi consequuntur dignissimos ducimus laboriosam hic dolorem illo dolorum porro vero numquam!',

    },
    {
        img:'/images/webdevelopment.jpeg',
        title:'Web Development',
        tech:['React','Django','Flutter','Anjular'],
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi consequuntur dignissimos ducimus laboriosam hic dolorem illo dolorum porro vero numquam!',

    },
]

const Service:FC = () => {
  return (
    <Box component='section' className='service-main-conatiner'>
        <Box component='div' className='service-container'>
            <Typography className='service-heading'>Our Services</Typography>
            <Grid container className='grid-container'  spacing={3}>
                {data.map((item,index) =>(
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Box component='div' className='servicecard'>
                            <Box component='div' className='servicecardimg' sx={{background:`url(${item.img}) no-repeat center/cover`}} />
                                <Box component='div' className='service-card-content' >
                                    <Typography variant='h6' fontWeight='900' >{item.title}</Typography>
                                        <Box display='flex' flexWrap='wrap' gap={1} >
                                            {item.tech.map((tec,index) => (
                                                <Typography  className='technologies' key={index}>{tec}</Typography>
                                            ))}
                                        </Box>
                                    <Typography variant='subtitle2' fontSize='12px'>{item.desc}</Typography>
                                    <Button  variant='contained' className='explorebutton' sx={{fontSize:'10px'}} endIcon={<ArrowLeft/>}>Explore</Button>
                                </Box>
                            </Box>
                    </Grid>
                ))}

            </Grid>
        </Box>
            
    </Box>
  )
} 

export default Service;
