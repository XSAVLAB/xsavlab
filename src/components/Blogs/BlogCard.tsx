import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

type Props = {
    id:number,
    image:string,
    title:string,
    date:string,
    desc:string,
}

const BlogCard = ({id,image,title,date,desc}: Props) => {
  return (
    <Box component='div' className='blog-card' key={`card_${id}`}>
        <Box component='img' src={image} className='blog-card-img' alt='image'/>
        <Box component='div' className='blog-card-content'>
            <Typography className='blog-card-title'>{title}</Typography>
            <Typography className='blog-card-date'>{date}</Typography>
            <Typography className='blog-card-desc'>{desc}</Typography>
        </Box>
  </Box>
  )
}

export default BlogCard;