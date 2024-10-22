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
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useRouter } from 'next/navigation';


type LinkItem = {
  link: string;
  name: string;
};

const navlinks: string[] = ['About us', 'Services','Cases', 'Solution', 'Client', 'Blogs', ]

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [iconColor, setIconColor] = useState<string>('white');
  const router = useRouter();

 

  const handleClick = (): void => {
    setOpenMenu(!openMenu);
    setIconColor((prevColor) => (prevColor === 'white' ? 'primary.light' : 'white'));
  };

  return (
    <AppBar className='navbar-container'>
      <Toolbar className='toolbar' disableGutters>
        <Box sx={{ display: 'flex' }}>
          <Typography href='/' component="a" className='logo-xsav'> Xsav Lab </Typography>
        </Box>

        {/* Navigation Links */}

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navlinks.map((item, index) => (
            <Button key={index} href={`/${(item === 'Home')?'':item}`}  variant="text" className='navbar-buttons'>
              {item}
            </Button>
          ))}
          <Button variant="contained" endIcon={<QuestionAnswerIcon />} className="btn-lc">
          Let’s chat
        </Button>
        </Box>

        {/* Let’s Chat Button */}
       

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
        <Box component='div' className='small-device-menu'>
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
