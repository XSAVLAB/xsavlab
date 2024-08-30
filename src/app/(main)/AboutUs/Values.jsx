import Box from '@mui/material/Box'
import React from 'react'
import { Typography } from '@mui/material'

const Values = () => {
  return (
    <Box  component='section' minHeight={'100vh'} minWidth='100vw' pt={6} sx={{backgroundImage:`url(/values.jpg)`, color:'white', backgroundSize: 'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}} >
        <Typography variant='h4' fontWeight={800} textAlign='center'> Our Values</Typography>
        <Box display='flex' justifyContent='center' gap={3}>
            <Box display='flex' flexDirection='column' padding='20px'></Box>
        </Box>

    </Box>
  )
}

export default Values