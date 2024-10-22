import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { clients } from './data'

type Props = {}

const Clients = (props: Props) => {
  return (
    <Box component='div' className='values-features-client'>
        <Typography className='about-heading'>Our clients were featured on </Typography>
            <Box component='div' className='value-client-container'>
                {clients.map((client,index)=>(
                    <Box component='img' key={index} className='feature-icon' src={client} alt='client-icon'/>
                ))}
            </Box>
    </Box>
  )
}

export default Clients