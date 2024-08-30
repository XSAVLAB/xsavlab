import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography  from '@mui/material/Typography';


const Footer = () => {
  return (
    <Box component='section' display='flex' minHeight='50vh' justifyContent='center'  gap={10} px={20} flexDirection='column'>
      <Box display='flex'minWidth='100%' justifyContent='space-between'  alignItems='center'>
        <Box display='flex' flexDirection='column' gap={3} color='black'>
          <Typography fontWeight='800'>Our services</Typography>
          <Link href='#' underline='none' color='black'>Team augmentation</Link>
          <Link href='#' underline='none' color='black'>Mobile Development</Link>
          <Link href='#' underline='none' color='black'>Back-end Development</Link>
          <Link href='#' underline='none' color='black'>AI Development</Link>
          <Link href='#' underline='none' color='black'>Front-end Development</Link>
          <Link href='#' underline='none' color='black'>Web Development</Link>

        </Box>
        <Box display='flex' flexDirection='column' gap={3} color='black'>
          <Typography fontWeight='800'>Our services</Typography>
          <Link href='#' underline='none' color='black'>Team augmentation</Link>
          <Link href='#' underline='none' color='black'>Mobile Development</Link>
          <Link href='#' underline='none' color='black'>Back-end Development</Link>
          <Link href='#' underline='none' color='black'>AI Development</Link>
          <Link href='#' underline='none' color='black'>Front-end Development</Link>
          <Link href='#' underline='none' color='black'>Web Development</Link>

        </Box>
        <Box display='flex' flexDirection='column' gap={3} color='black'>
          <Typography fontWeight='800'>Our services</Typography>
          <Link href='#' underline='none' color='black'>Team augmentation</Link>
          <Link href='#' underline='none' color='black'>Mobile Development</Link>
          <Link href='#' underline='none' color='black'>Back-end Development</Link>
          <Link href='#' underline='none' color='black'>AI Development</Link>
          <Link href='#' underline='none' color='black'>Front-end Development</Link>
          <Link href='#' underline='none' color='black'>Web Development</Link>

        </Box>
        <Box display='flex' flexDirection='column' gap={3} color='black'>
          <Typography fontWeight='800'>Our services</Typography>
          <Link href='#' underline='none' color='black'>Team augmentation</Link>
          <Link href='#' underline='none' color='black'>Mobile Development</Link>
          <Link href='#' underline='none' color='black'>Back-end Development</Link>
          <Link href='#' underline='none' color='black'>AI Development</Link>
          <Link href='#' underline='none' color='black'>Front-end Development</Link>
          <Link href='#' underline='none' color='black'>Web Development</Link>

        </Box>
      </Box>
      <Box  display='flex'minWidth='100%' justifyContent='space-between' alignItems='center'>
          <Typography>Xsav Labs</Typography>
          <Typography>+1 (415) 655-1002 | 830 Stewart Drive, #212, Sunnyvale, CA, USA, 94085</Typography>
      </Box>
     
    </Box>
  )
}

export default Footer



