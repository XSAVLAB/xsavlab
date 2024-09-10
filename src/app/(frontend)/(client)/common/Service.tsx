'use client';

import  Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Box  from '@mui/material/Box'
import {FC} from 'react'
import Button from '@mui/material/Button'
import ArrowLeft from '../../../../../public/svgs/ArrowLeft'


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
    <Box component='section' className='maincontainer' sx={{ position: 'relative', backgroundImage: 'url(/images/ai-generated-8211245_1280.webp)', backgroundSize: 'cover', backgroundPosition: 'center','&:after': {content: '""',position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',background: 'rgba(0, 0, 0, 0.5)',backdropFilter: 'blur(8px)',  zIndex: 1,},}}>
        <Box component='div' sx={{position: 'relative',zIndex: 2,  color: 'white', padding:10,display:'flex',flexDirection:'column', justifyContent:'center', gap:7, alignItems:'center' }}>
            <Typography variant='h3' fontWeight='900' >Our Services</Typography>
            <Grid container spacing={4} sx={{justifyContent:'center'}}>
                {data.map((item,index) => (
                    <Grid component='div' className='servicecard'  >
                     <Box component='div' className='servicecardimg' sx={{background:`url(${item.img}) no-repeat center/cover`}} />
                        <Box display='flex' flexDirection='column' gap={3} textAlign='left' alignItems='left' padding='30px 40px' >
                            <Typography variant='h4' fontWeight='900' >{item.title}</Typography>
                                <Box display='flex' flexWrap='wrap' gap={1} >
                                    {item.tech.map((tec,index) => (
                                        <Typography  className='technologies' key={index}>{tec}</Typography>
                                    ))}
                                </Box>
                            <Typography variant='subtitle2' >{item.desc}</Typography>
                            <Button  variant='contained' className='explorebutton' endIcon={<ArrowLeft/>}>Explore</Button>
                        </Box>
                    </Grid>
                ))}  
            </Grid>
      </Box>
    </Box>
  )
} 

export default Service;