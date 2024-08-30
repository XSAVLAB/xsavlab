import  Box  from '@mui/material/Box'
import React from 'react'

const Hero = () => {
  return (
    <Box component='section' width='100vw' display='flex' justifyContent='center' mt='64px' bgcolor='black' height='100vh'>
        <Box sx={{ width: '50%' }}>
        {/* Content for the first half */}
        </Box>
        <Box sx={{ width: '50%' }}>
        {/* Content for the second half */}
        </Box>
    </Box>
  )
}

export default Hero