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
    <Box component='section' display='flex' maxWidth={'100vw'}  flexDirection='column' pt={5} px={{xs:12,lg:1,xl:5}} sx={{ background: 'linear-gradient(90deg, #01f9d7, #159fc5, #2e31b5)'}}>
      <Box display='flex' flexDirection={{xs:'column',lg:'row'}} textAlign='left' gap={{xs:5,xl:0}} justifyContent='space-evenly' pb={10} borderBottom='2px solid white' color='white'>
          
        <Box display='flex' flexDirection='column' textAlign={{xs:'left',lg:'center'}} gap={2} minWidth='200px'>
                <Typography variant='h4' sx={{fontSize:{xs:'20px',md:'30px',lg:'30px'}}}>  Who we are </Typography>
                <Typography variant='h6'> Clients </Typography>
                <Typography variant='h6'> Job </Typography>
                <Typography variant='h6'> Blog </Typography>
                <Typography variant='h6'> Contacts </Typography>
        </Box>
        <Box display='flex' flexDirection='column' textAlign={{xs:'left',lg:'center'}} gap={2} minWidth='200px' >
                <Typography variant='h4' sx={{fontSize:{xs:'20px',md:'30px',lg:'30px'}}}>  Who we are </Typography>
                <Typography variant='h6'> Clients </Typography>
                <Typography variant='h6'> Job </Typography>
                <Typography variant='h6'> Blog </Typography>
                <Typography variant='h6'> Contacts </Typography>
        </Box>
        <Box display='flex' flexDirection='column' gap={2}  >
              <Typography variant='h3' fontWeight='900'> Be Future Ready</Typography>
              <Typography variant='body1'> get exclusive update straight on your indbox</Typography>
              <Box display='flex' >
                <TextField  placeholder="Email address" variant='outlined'  sx={{'& .MuiOutlinedInput-root': {backgroundColor: 'white', color: '#00000', width:'400px'},input: {padding: '10px 12px',},}}></TextField>
                <Button  sx={{background:'#159fc5', minWidth: '40px',width: '40px',}}>
                  <ArrowForward sx={{color:'white'}}/>
                </Button>
              </Box>
          </Box>
        <Box display='flex'  flexDirection='column' gap={2}>
            <Typography variant='h4'  sx={{fontSize:{xs:'20px',md:'30px',lg:'30px'}}}> Conatct Us </Typography>
              <Box display='flex'  gap={3}>
                <PhoneIcon/>
                <Typography variant='h6'> (+91) 98846 49716 </Typography>
              </Box>
              <Box display='flex'  gap={3}>
                <MailIcon/>
                <Typography variant='h6'> hello@xsavlab.com </Typography>
              </Box>
              <Box display='flex'  gap={3}>
                <LocationOnIcon/>
                <Typography variant='h6'> 401, Rajashree Estate, Hinjewadi Phase 2, Pune 411057 </Typography>
              </Box>

        </Box>
       
      </Box>
      <Box display='flex' flexDirection={{xs:'column',lg:'row'}} justifyContent='space-between' alignItems='center' gap={{xs:6,lg:0}}  padding={2} color={'white'}>
       
        <Box display='flex' gap={2}>
          <Facebook />
          <Instagram/>
          <Twitter/>
          <LinkedIn/>
          <Youtube/>
        </Box>
        <Typography variant='h6' fontWeight='600'>&copy; XsavLab Private Ltd.All Right Reserved</Typography>
        <Box display='flex' gap={3} >
          <Typography>Terms Of Service</Typography>
          <Typography>Privacy Policy</Typography>
        </Box>
        
      </Box>
    </Box>

  )
}

export default Footer;