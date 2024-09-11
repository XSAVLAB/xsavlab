'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useRouter } from 'next/navigation';

const navlinks: string[] = ['Home', 'Services', 'Solution', 'Client', 'Blogs', 'About us']

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [iconColor, setIconColor] = useState<string>('white');
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/');
  };

  const handleClick = (): void => {
    setOpenMenu(!openMenu);
    setIconColor((prevColor) => (prevColor === 'white' ? 'primary.light' : 'white'));
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#001a3e90',
        backdropFilter: 'blur(25px)',
        padding: { xs: '1px', md: '0 5px', xl: '6px 20px' },
      }}
    >
      <Toolbar disableGutters>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography href='/' component="a" className='logo-xsav' fontSize={{ xs: '25px', lg: '30px', xl: '40px' }}> Xsav Lab </Typography>
        </Box>

        {/* Navigation Links */}

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 7 }}>
          {navlinks.map((item, index) => (
            <Button
              key={index}
              href={`/${item}`}
              variant="text"
              color="inherit"
              sx={{
                mr: { lg: 1 },
                bgcolor: 'transparent',
                fontSize: { md: '12px', xl: '20px' },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: 5,
                  width: 0,
                  height: '3px',
                  backgroundColor: 'primary.light',
                  transition: 'width 0.5s ease-in-out',
                },
                '&:hover': {
                  color: 'primary.light',
                  bgcolor: 'transparent',
                  textShadow: '0 0 20px primary.light',
                },
                '&:hover:after': {
                  width: '100%',
                  boxShadow: '0 0 15px primary.light',
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Let’s Chat Button */}
        <Button variant="contained" endIcon={<QuestionAnswerIcon />} className="btn-lc">
          {/* <Button variant="contained" endIcon={<ChatBubbleOutlineIcon />} sx={{ borderRadius: 1.5, backgroundColor: 'primary.light', color: 'common.white' }}> */}
          Let’s chat
        </Button>

        {/* For small screens */}
        <Box sx={{ display: { sm: 'block', md: 'none' }, flexGrow: 0 }}>
          <Tooltip title="Menu">
            <IconButton size="large" aria-label="Menu icon" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon sx={{ color: iconColor }} fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>

      {openMenu && (
        <Box
          sx={{
            position: 'absolute',
            top: '75px',
            right: '0',
            bgcolor: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 0 20px primary.main',
            width: { xs: '100%', sm: '70%', md: '50%' },
            height: 'auto',
            zIndex: 1000,
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'column',
            padding: '10px',
            gap: '10px',
          }}
        >
          {navlinks.map((item, index) => (
            <Button href={`/${item}`} key={index} variant="text" color="inherit">
              {item}
            </Button>
          ))}
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
