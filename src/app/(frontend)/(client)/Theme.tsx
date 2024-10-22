'use client';
import { createTheme } from "@mui/material";

import React from 'react'

const Theme = createTheme({
    typography:{
        fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none', 
            },
          },
        },
    },

});

export default Theme;