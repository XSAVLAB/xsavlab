import { Box, Typography } from '@mui/material'
import './Common.css'

const Subscribe = () => {
  return (
    <Box component='section' className='subscribe-wrapper'>
        <Box component='div' className='subscribe-container'>
            <Box component='div' className='subscribe-content'>
                <Typography>Subscribe to our stories</Typography>
                <Typography>Get notified when we publish something new. </Typography>
            </Box>
            <input className='subscribe-input'></input>
        </Box>
    </Box>
  )
}

export default Subscribe