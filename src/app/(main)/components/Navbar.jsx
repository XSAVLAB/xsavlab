'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import MessageIcon from '@mui/icons-material/Message';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useState } from 'react';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [iconcolor,setIconColor] = useState('white');
  
  const handleClick = () => {
      setOpenMenu(!openMenu);
      setIconColor((prevColor) => {return prevColor === 'white' ? "primary.light" : 'white';});

    };
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)',padding:{xs:'5px', md:'0 5px',xl:'0 100px'}}}>
    <Toolbar sx={{ justifyContent: 'space-between' }} disableGutters>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" component="div" fontSize={{xs:'25px',lg:'35px',xl:'40px'}} sx={{fontFamily:'Quantify', ml: 1, transition: 'transform 1s cubic-bezier(.48,.4,.83,.67), color 1s cubic-bezier(.48,.4,.83,.67), text-shadow 1s cubic-bezier(.48,.4,.83,.67)', '&:hover':{transform:{xs:'scale(1.2)',lg:'scale(1.5)',xl:'scale(1.8)'}, color:'primary.light',textShadow:`0 0  10px primary.main`} }}>
          Xsav Lab
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box sx={{display:{xs:'none', md:'flex'},gap:3}} >
        <Button variant='text' color='inherit' startIcon={<CorporateFareIcon/>}  sx={{mr:{lg:1},bgcolor:'transparent', fontSize:{md:'12px',xl:'20px'},'&:after': {content: '""',position: 'absolute',left: 0,bottom: 5,width: 0,height: '3px',backgroundColor: 'primary.light',transition: 'width 0.5s ease-in-out'},'&:hover':{color:'primary.light',bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 15px primary.light`}}}>About Us</Button>
        <Button variant='text' color='inherit' startIcon={<FingerprintIcon/>}   sx={{mr:{lg:1},bgcolor:'transparent', fontSize:{md:'12px',xl:'20px'},'&:after': {content: '""',position: 'absolute',left: 0,bottom: 5,width: 0,height: '3px',backgroundColor: 'primary.light',transition: 'width 0.5s ease-in-out'},'&:hover':{color:'primary.light',bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 15px primary.light`}}}>Cases</Button>
        <Button variant='text' color='inherit' startIcon={<SupportAgentIcon/>}  sx={{mr:{lg:1},bgcolor:'transparent', fontSize:{md:'12px',xl:'20px'},'&:after': {content: '""',position: 'absolute',left: 0,bottom: 5,width: 0,height: '3px',backgroundColor: 'primary.light',transition: 'width 0.5s ease-in-out'},'&:hover':{color:'primary.light',bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 15px primary.light`}}}>Service</Button>
        <Button variant='text' color='inherit' startIcon={<CodeIcon/>}  sx={{mr:{lg:1},bgcolor:'transparent', fontSize:{md:'12px',xl:'20px'},'&:after': {content: '""',position: 'absolute',left: 0,bottom: 5,width: 0,height: '3px',backgroundColor: 'primary.light',transition: 'width 0.5s ease-in-out'},'&:hover':{color:'primary.light',bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 15px primary.light`}}}>Solution</Button>         
        <Button variant='text' color='inherit' startIcon={<GroupsIcon/>}  sx={{mr:{lg:1},bgcolor:'transparent', fontSize:{md:'12px',xl:'20px'},'&:after': {content: '""',position: 'absolute',left: 0,bottom: 5,width: 0,height: '3px',backgroundColor: 'primary.light',transition: 'width 0.5s ease-in-out'},'&:hover':{color:'primary.light',bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 15px primary.light`}}}>Client</Button>
        <Button variant='text' color='inherit' startIcon={<MessageIcon/>}  sx={{mr:{lg:1},bgcolor:'transparent', fontSize:{md:'12px',xl:'20px'},'&:after': {content: '""',position: 'absolute',left: 0,bottom: 5,width: 0,height: '3px',backgroundColor: 'primary.light',transition: 'width 0.5s ease-in-out'},'&:hover':{color:'primary.light',bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 10px primary.light`}}}>Blog</Button>
      </Box>
      {/* Let's Chat Button */}
      <Button variant="contained" endIcon={<ChatBubbleOutlineIcon/>} sx={{ backgroundColor: 'primary.light', color: 'common.white' }}>
        Let’s chat
      </Button>
      {/* for small screens */}
      <Box sx={{display:{sm:'block',md:'none'},flexGrow:0}}>
        <Tooltip>
          <IconButton size="large" aria-label="Menu icon" aria-controls="menu-appbar" aria-haspopup="true"  onClick={handleClick}> <MenuIcon sx={{color:iconcolor}} fontSize='large' /></IconButton>
        </Tooltip>
      </Box>
    </Toolbar>
    {openMenu && (
                <Box  sx={{position: 'absolute', top: '75px', right: '0', bgcolor:'rgba(0,0,0,0.7)',backdropFilter:'blur(20px)',boxShadow: `0 0 25px primary.light `, borderRadius: '8px', p: 2, width: '200px'}} >
                    <Button variant="text"  color='inherit'fullWidth  startIcon={<CorporateFareIcon/>}   sx={{fontFamily:'Quantify', justifyContent:'flex-start',bgcolor:'transparent','&:after': {content: '""',position: 'absolute',left: 0,bottom: 0,width: 0,height: '2px',backgroundColor: `primary.light`,transition: 'width 0.5s ease-in-out'},'&:hover':{color:`primary.light`,bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 10px primary.light`}}} >Home</Button>
                    <Button variant="text"  color='inherit'fullWidth startIcon={<FingerprintIcon/>} sx={{fontFamily:'Quantify',justifyContent:'flex-start',bgcolor:'transparent','&:after': {content: '""',position: 'absolute',left: 0,bottom: 0,width: 0,height: '2px',backgroundColor: `primary.light`,transition: 'width 0.5s ease-in-out'},'&:hover':{color:`primary.light`,bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 10px primary.light`}}} >About Me</Button>
                    <Button variant="text"  color='inherit'fullWidth startIcon={<SupportAgentIcon/>} sx={{fontFamily:'Quantify',justifyContent:'flex-start',bgcolor:'transparent','&:after': {content: '""',position: 'absolute',left: 0,bottom: 0,width: 0,height: '2px',backgroundColor: `primary.light`,transition: 'width 0.5s ease-in-out'},'&:hover':{color:`primary.light`,bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 10px primary.light`}}} >Education</Button>
                    <Button variant="text"  color='inherit'fullWidth startIcon={<CodeIcon/>} sx={{fontFamily:'Quantify',justifyContent:'flex-start',bgcolor:'transparent','&:after': {content: '""',position: 'absolute',left: 0,bottom: 0,width: 0,height: '2px',backgroundColor: `primary.light`,transition: 'width 0.5s ease-in-out'},'&:hover':{color:`primary.light`,bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 10px primary.light`}}} >Technologies</Button>
                    <Button variant="text"  color='inherit'fullWidth startIcon={<GroupsIcon/>} sx={{fontFamily:'Quantify',justifyContent:'flex-start',bgcolor:'transparent','&:after': {content: '""',position: 'absolute',left: 0,bottom: 0,width: 0,height: '2px',backgroundColor: `primary.light`,transition: 'width 0.5s ease-in-out'},'&:hover':{color:`primary.light`,bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 10px primary.light`}}} >Experience</Button>
                    <Button variant="text"  color='inherit'fullWidth startIcon={<MessageIcon/>} sx={{fontFamily:'Quantify',justifyContent:'flex-start',bgcolor:'transparent','&:after': {content: '""',position: 'absolute',left: 0,bottom: 0,width: 0,height: '2px',backgroundColor: `primary.light`,transition: 'width 0.5s ease-in-out'},'&:hover':{color:`primary.light`,bgcolor:'transparent',textShadow:`0 0 20px primary.light`},'&:hover:after': {width: '100%',boxShadow:`0 0 10px primary.light`}}} >Contact</Button>
                </Box>
            )}
  </AppBar>
  )
}

export default Navbar;