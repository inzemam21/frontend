import {  Box, Typography } from '@mui/material'
import React from 'react'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'SAP Copyright © '}
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
}


function Footer() {
    return (
        
             <Copyright sx={{backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],  pb:4}}/>
           
    )
}

export default Footer
