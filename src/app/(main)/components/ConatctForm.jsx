import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react'
import EastIcon from '@mui/icons-material/East';

const ConatctForm = () => {
  return (
    <Box component='section'   display='flex' flexDirection={{xs:"column",lg:'row'}} bgcolor='blue' color='white'  px={{sm:3,md:10,xl:20 }} py={10} gap={{md:'24px',xl:'400px'}}>
      <Box display='flex' flexDirection='column' gap={4}>
        <Typography variant='h3' fontWeight='800' >Let’s build something great together</Typography>
        <Typography variant='body'>We believe in turning ideas into reality and we &apos;re ready to join your journey. Reach out to us and let &apos;s start discussing your project.</Typography>
      </Box>
      
      <Box component='form' display='flex' flexDirection='column'  width='100%'  gap={5}>
        <Box display='flex' gap={4}>
          <TextField label='First Name' fullWidth  className='textinput' ></TextField>
          <TextField label='Last Name' fullWidth  className='textinput' ></TextField>
        </Box>
        <TextField label='Comapny' fullWidth  className='textinput' ></TextField>
        <Box display='flex' gap={4}>
          <TextField label='Work Email' fullWidth  className='textinput' ></TextField>
          <TextField label='Phone Number' inputProps={{inputMode: 'tel',pattern: '[0-9+()-s]*' }} fullWidth  className='textinput' ></TextField>
        </Box>
        <TextField label='Tell us about your project (optional)' fullWidth multiline minRows={4}  className='textinput' ></TextField>
        <Box display='flex' alignItems='center' flexDirection={{md:'column',lg:'row'}}  gap={2}>
          <Button endIcon={<EastIcon fontSize='large'/>} sx={{borderRadius:'10px',textTransform: 'none',bgcolor:'white',width:'250px',height:'50px',fontSize:'17px',color:'black',fontWeight:'600', padding:'30px',transition:'1s ease-in-out','&:hover':{bgcolor:"black" ,color:'white'}}}>Send request</Button>
          <Typography variant='body2' >By sending this form I confirm that I have read and accept the Privacy Policy.</Typography>
        </Box>
        
      </Box>
    </Box>
    //   sx={{'.MuiInputLabel-root':{color:'white',fontSize:'30px',bgcolor:'blue',fontWeight:'900',paddingRight:'5px'},'.MuiOutlinedInput-root':{input:{fontFamily:'Gilroy-ExtraBold',fontSize:'30px',color:'white'},fieldset:{border:'3px solid white',borderRadius:'10px','&.hover':'2px solid yellow'},'&.Mui-focused fieldset':{border:'4px solid white'}}}} 
  )
}

export default ConatctForm