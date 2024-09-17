'use client';
import { ArrowForward, Input } from '@mui/icons-material';
import {  Button, IconButton,TextField, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import  Box from '@mui/material/Box';
import {Facebook, Instagram, LinkedIn, Twitter, Youtube} from  '../../../../../public/Icons'
import {FC} from 'react'

const Footer:FC = () => {
  return (
    <Box component='section' className='footercont'>
      <Box display='flex' flexDirection={{xs:'column',lg:'row'}} textAlign='left' gap={{xs:5,xl:0}} justifyContent='space-evenly' pb={10} borderBottom='2px solid white' color='white'>
          
        <Box display='flex' flexDirection='column' textAlign={{xs:'left',lg:'center'}} gap={2} minWidth='200px'>
                <Typography variant='h4' fontWeight='900'  sx={{fontSize:{xs:'20px',md:'30px',lg:'20px'}}}>  Who we are </Typography>
                <Typography className='links'> Clients </Typography>
                <Typography className='links'> Job </Typography>
                <Typography className='links'> Blog </Typography>
                <Typography className='links'> Contacts </Typography>
        </Box>
        <Box display='flex' flexDirection='column' textAlign={{xs:'left',lg:'center'}} gap={2} minWidth='200px' >
                <Typography variant='h4' fontWeight='900' sx={{fontSize:{xs:'20px',md:'30px',lg:'20px'}}}>  Who we are </Typography>
                <Typography className='links'> Clients </Typography>
                <Typography className='links'> Job </Typography>
                <Typography className='links'> Blog </Typography>
                <Typography className='links'> Contacts </Typography>
        </Box>
        <Box display='flex' flexDirection='column' gap={2}  >
              <Typography variant='h5' fontWeight='900' sx={{fontSize:{xs:'20px',md:'30px',lg:'20px'}}}> Be Future Ready</Typography>
              <Typography variant='body2'> get exclusive update straight on your indbox</Typography>
              <Box display='flex' >
                <TextField  placeholder="Email address" variant='outlined'  sx={{'& .MuiOutlinedInput-root': {backgroundColor: 'white', color: '#00000', width:'400px'},input: {padding: '10px 12px',},}}></TextField>
                <Button  sx={{background:'#159fc5', minWidth: '40px',width: '40px',}}>
                  <ArrowForward sx={{color:'white'}}/>
                </Button>
              </Box>
          </Box>
        <Box display='flex'  flexDirection='column' gap={2}>
            <Typography variant='h4' fontWeight='900'  sx={{fontSize:{xs:'20px',md:'30px',lg:'20px'}}}> Conatct Us </Typography>
              <Box display='flex'  gap={3}>
                <PhoneIcon/>
                <Typography fontSize={{lg:'16px',xl:'18px'}}> (+91) 98846 49716 </Typography>
              </Box>
              <Box display='flex'  gap={3}>
                <MailIcon/>
                <Typography fontSize={{lg:'16px',xl:'18px'}}> hello@xsavlab.com </Typography>
              </Box>
              <Box display='flex'  gap={3}>
                <LocationOnIcon/>
                <Typography fontSize={{lg:'16px',xl:'18px'}}> 401, Rajashree Estate, Hinjewadi Phase 2, Pune 411057 </Typography>
              </Box>

        </Box>
       
      </Box>
      <Box display='flex' flexDirection={{xs:'column',lg:'row'}} justifyContent='space-between' alignItems='center' gap={{xs:6,lg:0}}  padding={2} color={'white'}>
       
        <Box display='flex' gap={2}>
          <Facebook  size='15px'/>
          <Instagram size='15px'/>
          <Twitter size='15px'/>
          <LinkedIn size='15px'/>
          <Youtube size='15px'/>
        </Box>
        <Typography fontSize={{lg:'14px',xl:'18px'}} fontWeight='600'>&copy; XsavLab Private Ltd.All Right Reserved</Typography>
        <Box display='flex' gap={3} >
          <Typography fontSize={{lg:'14px',xl:'18px'}} fontWeight='900'>Terms Of Service</Typography>
          <Typography fontSize={{lg:'14px',xl:'18px'}} fontWeight='900'>Privacy Policy</Typography>
        </Box>
        
      </Box>
    </Box>

  )
}

export default Footer;