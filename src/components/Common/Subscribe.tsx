import { Box, Typography } from '@mui/material'
import './Common.css'
import { ChangeEvent, useState,KeyboardEvent } from 'react'



const Subscribe = () => {
  const [emailinput,setEmailInput] = useState<string>('');
  const [emailvalid,setEmailValid] = useState<boolean>(true);

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEmailInput(event.target.value);
  }
  const onKeypress = (event:KeyboardEvent<HTMLInputElement>) =>{
    if (event.key === "Enter") {
      event.preventDefault(); 
      if (isValidEmail(emailinput)) {
          setEmailValid(true);
      } else {
          setEmailValid(false)
      }
    }
  }
  return (
    <Box component='section' className='subscribe-wrapper'>
        <Box component='div' className='subscribe-container'>
          <form className='subscribe-form' action="">
            <Box component='div' className='subscribe-content'>
                <Typography variant='h3' className='subscribe-heading'>Subscribe to our stories</Typography>
                <Typography className='subscribe-subheading'>Get notified when we publish something new. </Typography>
            </Box>
              <input className='subscribe-input' placeholder='Email' value={emailinput} onChange={onInputChange} onKeyDown={onKeypress} style={{color:(emailvalid)?'#35353d':'#ff5151'}}></input>
          </form>
        </Box>
    </Box>
  )
}

export default Subscribe;