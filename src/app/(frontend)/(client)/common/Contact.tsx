import { Button, Container, InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';

import Typography  from '@mui/material/Typography';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {FC, useState} from 'react'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


const customTextFieldStyle = {
  '& .MuiInputBase-root': {
    color: 'white',
    fontSize:'12px ',
    fontWeight:'500'
  },
  '& .MuiInputLabel-root': {
    color: 'white', 
    fontSize:'12px ',
    fontWeight:'800'
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white', // Label color when focused
  },
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid white', // Bottom border color
  },
  '& .MuiInput-underline:hover:before': {
    borderBottom: '2px solid white', // Bottom border color on hover
  },
  '& .MuiInput-underline:after': {
    borderBottom: '2px solid white', // Bottom border color when focused
  },
  '& .MuiInput-underline:hover:after': {
    borderBottom: '2px solid white', // Bottom border color on hover (should be consistent)
  },
  '& .MuiInputBase-root.Mui-focused': {
    color: 'white', // Text color when focused
  },
};
const texticon={
  input: {
    endAdornment: (
      <InputAdornment position="end">
        <RadioButtonUncheckedIcon sx={{color:'white', width:'18px'}} />
      </InputAdornment>
    ),
  },
}
const Contact:FC = () => {
  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const [orgname,setOrgname] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [desc,setDesc] = useState('');
  return (
    <Box component={'section'} className='contactcontainer'>
    <Box
      display='flex'
      minHeight='500px'
      width='900px'
      borderRadius='20px'
      flexDirection={{ xs: 'column', lg: 'row' }}
    >
      {/* Contact Form Container */}
      <Box
        display='flex'
        flexDirection='column'
        textAlign='center'
        width={{ xs: '100%', lg: 'calc(100% - 400px)' }}
        bgcolor={'blue'}
        p={7}
        gap={5}
        borderRadius='20px 0 0 20px'>
          <Box>
            <Typography variant='h5' gutterBottom>Contact us</Typography>
            <Typography variant='body2'>Let's build something great</Typography>
          </Box>
          <Box component='form' display='flex' flexDirection='column' gap={2}>
            <Box display='flex' flexDirection={{xs:'column',lg:'row'}} gap={2}>
              <TextField variant='standard' sx={customTextFieldStyle} value={firstname}  onChange={(e) => setFirstname(e.target.value)}   slotProps={texticon}fullWidth  label='First Name'></TextField>
              <TextField variant='standard' sx={customTextFieldStyle}  slotProps={texticon} value={lastname}  onChange={(e) => setLastname(e.target.value)} fullWidth label='Last Name'></TextField>
            </Box>
            <TextField variant='standard' sx={customTextFieldStyle}  slotProps={texticon} value={orgname}  onChange={(e) => setOrgname(e.target.value)} fullWidth label='Organisation Name'></TextField>
            <Box display='flex' flexDirection={{xs:'column',lg:'row'}} gap={2}>
              <TextField variant='standard' sx={customTextFieldStyle}  slotProps={texticon} value={email}  onChange={(e) => setEmail(e.target.value)} fullWidth label='Phone'></TextField>
              <TextField variant='standard' sx={customTextFieldStyle}  slotProps={texticon} value={phone}  onChange={(e) => setPhone(e.target.value)} fullWidth label='Email'></TextField>
            </Box>
            <TextField variant='standard'  sx={customTextFieldStyle}  slotProps={texticon} value={desc}  onChange={(e) => setDesc(e.target.value)} fullWidth multiline maxRows={2} label='Description'></TextField>
            <Box display='flex' gap={4}>
            <Button variant='contained' className='messagebutton' >Send Message </Button>
            <Typography sx={{fontSize:'10px'}} >By sending this form, I confirm that I have read and accepted the Privacy Policy.</Typography>
            </Box>
          </Box>
      </Box>
  
      {/* Map Container */}
      <Box
        display='flex'
        flexDirection='column'
        width={{ xs: '100%', lg: '400px' }}
        height='100%' // Ensure it takes the full height of its container
        borderRadius='0 20px 20px 0'  // Rounded corners on the right
      >
        <Box
          component='iframe'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.635942515674!2d73.7483376!3d18.5904448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e55175009f%3A0xb92f8442017bd6c!2sSuratwala%20Mark%20Plazzo!5e0!3m2!1sen!2sin!4v1725943219818!5m2!1sen!2sin'
          width='100%'
          height='500px' // Ensure the iframe takes up the full height of its container
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          border='0'
          style={{ borderRadius: '0 20px 20px 0' }} // Rounded corners on the iframe
        ></Box>
      </Box>
    </Box>
  </Box>
  
  )
}

export default Contact;

// <Box display='flex' flexDirection='column' alignItems='center' width={{xs:'100%',lg:'60%'}} padding={10} bgcolor={'#2E89DE'} gap={2} px={10}>
//  <Typography variant='h4' fontWeight='900' borderBottom='4px solid white' pb='3px'>Contact Us</Typography>
// <Typography variant='body2' fontSize='20px'>To Build Something Great</Typography>
// <Box component='form' className='forminput' display='flex' width='700px' flexDirection='column' gap={4} mt={6}>
//   <Box display='flex' justifyContent='space-between' gap={4}>
//     <TextField variant='standard' sx={customtext}  fullWidth label='First Name'></TextField>
//     <TextField variant='standard'  fullWidth  sx={customtext} label='Last Name'></TextField>
//   </Box>
//   <TextField variant='standard'  sx={customtext} label='Comapny Name (optional)'></TextField>
//   <Box display='flex' justifyContent='space-between' gap={4}>
//     <TextField variant='standard' fullWidth  sx={customtext}   label='Work Email'></TextField>
//     <TextField variant='standard' fullWidth  sx={customtext}  label='Phone Number'></TextField>
//   </Box>
//   <TextField variant='standard'  sx={customtext}   multiline rows={4} label='Message'></TextField>
//   <Button>Send Message</Button>
// </Box>
// </Box>
// <Box component='div' display='flex'  width={'38%'} >
// <Box component='iframe' 
// src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.635942515674!2d73.7483376!3d18.5904448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e55175009f%3A0xb92f8442017bd6c!2sSuratwala%20Mark%20Plazzo!5e0!3m2!1sen!2sin!4v1725943219818!5m2!1sen!2sin'
// width='100%'
// height='100%'  
// loading='lazy' 
// referrerPolicy='no-referrer-when-downgrade'  
// border='0'/>
// </Box>

{/* <Box  component='section' className='maincontainer' bgcolor='palegreen' width='100vw' minHeight={'70vh'} flexDirection={{xs:'column-reverse',lg:'row'}} padding='0'>
<Box  component='div' display='flex' width={{xs:'100%',lg:'60%'}}  >
  <Typography variant='h4' textAlign={'center'}>Contact Us</Typography>
</Box>
<Box component='section' display='flex' width={{xs:'100%',lg:'38%'}} height={'70vh'} >
   
</Box>
</Box> */}