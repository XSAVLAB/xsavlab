import React, { useState } from 'react'
import Box from '@mui/material/Box';
import './Common.css';
import Typography  from '@mui/material/Typography';
import { Button, styled, TextField } from '@mui/material';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


type Props = {}

const WhiteTextField = styled(TextField)({
  '& label': {
    color: 'white', 
    fontSize:'12px',
  },
  '& label.Mui-focused': {
    color: 'white',  // Label color on focus
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white', 
      height:'50px',
    },
    '&:hover fieldset': {
      borderColor: 'white', // Change border color on hover to white
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white', // Change border color when focused to white
    },
    '& input': {
      color: 'white', // Set input text color to white
    },
    '& label': {
      color: 'white', // Set label color to white
    },
    '&.Mui-focused label': {
      color: 'white', // Set label color when focused to white
    },
  },
});

const ContactForm = (props: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  return (
    <Box component='div' className='contact-wrapper'>
        <Box component='div' className='contact-left'>
          <Typography variant='h5' className='contact-heading'>Let's Build Something Great Together</Typography>
          <Typography className='contact-subsection'>Ready to innovate? XsavLab is here to turn your concepts into tangible results. Reach out to start the conversation!</Typography>
  
        </Box>
        <Box component='div' className='contact-right'>
          <Box component='form' className='contact-form'>
            <Box component='div' className='form-row'>
              <WhiteTextField id="standard-basic" fullWidth label="First Name" variant="outlined" onChange={(e) =>(setFirstName(e.target.value))} />
              <WhiteTextField id="standard-basic" fullWidth label="Last Name" variant="outlined" onChange={(e) =>(setLastName(e.target.value))} />
            </Box>
            <Box component='div' className='form-row'>
              <WhiteTextField id="standard-basic" fullWidth label="Company Name(optional)" variant="outlined" onChange={(e) =>(setCompanyName(e.target.value))} />
            </Box>
            <Box component='div' className='form-row'>
              <WhiteTextField id="standard-basic" fullWidth label="Work Email" variant="outlined" onChange={(e) =>(setWorkEmail(e.target.value))} />
              <WhiteTextField id="standard-basic" fullWidth label="Phone Number" variant="outlined" onChange={(e) =>(setPhoneNumber(e.target.value))} />
            </Box>
            <Box component='div' className='form-row'>
              <WhiteTextField id="standard-basic" fullWidth  multiline rows={2} label="Tell us about your project (optional)" variant="outlined" onChange={(e) =>(setProjectDescription(e.target.value))} />
            </Box>
            <Box component='div' className='form-row'>
              <Button variant='contained' className='white-button' endIcon={<ArrowRightAltIcon/>}>Send request</Button>
              <Typography className='contact-caution'>By sending this form I confirm that I have read and accept the Privacy Policy.</Typography>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default ContactForm;