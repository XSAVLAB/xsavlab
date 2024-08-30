import React from 'react'
import EastIcon from '@mui/icons-material/East'
import Button from '@mui/material/Button'

const GradientButton = ({width='200px',fontsize='15px'}) => {
  return (
    <Button variant='contained'  endIcon={<EastIcon/>} sx={{background: 'linear-gradient(90deg, #FF5733 0%, #FF0066 100%)',borderRadius:'5px',width:`${width}`,fontSize:`${fontsize}`,px:1}}>Lets Chat</Button>
  )
}

export default GradientButton;