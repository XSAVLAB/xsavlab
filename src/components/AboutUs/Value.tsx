import { Box, Typography } from '@mui/material'
import React from 'react'
import { value } from './data'

type Props = {
    img:string,
    title:string,
    desc:string,
}

const ValueBox = ({img,title,desc}: Props) => {
  return (
    <Box component='div' className='value-box'>
        <Box component='img' className='value-icon' src={img} alt='icon'/>
        <Box component='div' className='value-content'>
            <Typography  variant='h5' className='value-title'>{title}</Typography>
            <Typography className='value-desc'>{desc}</Typography>
        </Box>
    </Box>
  )
}

const Value = () =>{
  return(
    <Box component='div' >
      <Typography className='about-heading'>Our Values</Typography>
                <Box component='div' className='values-box-container'>
                    {value.map((item,index) => (
                        <ValueBox key={index} img={item.icon} title={item.title} desc={item.desc}/>
                    ))}
                </Box>
    </Box>
  )
}
export default Value;