'use client';

import React from 'react';
import { ReactNode } from 'react';
import Navbar from '@/components/Common/Navbar'; // Make sure the path is correct based on your project structure
import Box from '@mui/material/Box';
import './global.css'
import { ThemeProvider } from '@emotion/react';
import Theme from './Theme';
import Footer from '@/components/Common/Footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
        <Navbar />
       
        {children}
  
        <Footer/>
    </ThemeProvider>
  );
};

export default Layout;
