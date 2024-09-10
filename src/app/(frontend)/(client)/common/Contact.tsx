import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import { fieldset } from 'framer-motion/client';
import {FC} from 'react'


const customtext={
  '.MuiInput-underline':{
    input:{
      color:'white',
      fontSize:'20px',
    },
    fieldset:{
      border:'5px solid white',
    },
    '&:before':{
      'bottom-border' : '3px solid white',
    }
  },
  ".MuiFormLabel-root": {
    color:'white'
    }
}

const Contact:FC = () => {
  return (
   <Box component={'section'} className='contactcontainer' flexDirection={{xs:'column',lg:'row'}}>
      <Box display='flex' flexDirection='column' alignItems='center' width={{xs:'100%',lg:'60%'}} padding={10} bgcolor={'#2E89DE'} gap={2} px={10}>
        <Typography variant='h4' fontWeight='900' borderBottom='4px solid white' pb='3px'>Contact Us</Typography>
        <Typography variant='body2' fontSize='20px'>To Build Something Great</Typography>
        <Box component='form' className='forminput' display='flex' width='700px' flexDirection='column' gap={4} mt={6}>
          <Box display='flex' justifyContent='space-between' gap={4}>
            <TextField variant='standard' sx={customtext}  fullWidth label='First Name'></TextField>
            <TextField variant='standard'  fullWidth  sx={customtext} label='Last Name'></TextField>
          </Box>
          <TextField variant='standard'  sx={customtext} label='Comapny Name (optional)'></TextField>
          <Box display='flex' justifyContent='space-between' gap={4}>
            <TextField variant='standard' fullWidth  sx={customtext}   label='Work Email'></TextField>
            <TextField variant='standard' fullWidth  sx={customtext}  label='Phone Number'></TextField>
          </Box>
          <TextField variant='standard'  sx={customtext}   multiline rows={4} label='Message'></TextField>
          <Button>Send Message</Button>
        </Box>
      </Box>
      <Box component='div' display='flex'  width={'38%'} >
      <Box component='iframe' 
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.635942515674!2d73.7483376!3d18.5904448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e55175009f%3A0xb92f8442017bd6c!2sSuratwala%20Mark%20Plazzo!5e0!3m2!1sen!2sin!4v1725943219818!5m2!1sen!2sin'
        width='100%'
        height='100%'  
        loading='lazy' 
        referrerPolicy='no-referrer-when-downgrade'  
        border='0'/>
      </Box>
   </Box>
  )
}

export default Contact;
{/* <Box  component='section' className='maincontainer' bgcolor='palegreen' width='100vw' minHeight={'70vh'} flexDirection={{xs:'column-reverse',lg:'row'}} padding='0'>
<Box  component='div' display='flex' width={{xs:'100%',lg:'60%'}}  >
  <Typography variant='h4' textAlign={'center'}>Contact Us</Typography>
</Box>
<Box component='section' display='flex' width={{xs:'100%',lg:'38%'}} height={'70vh'} >
   
</Box>
</Box> */}