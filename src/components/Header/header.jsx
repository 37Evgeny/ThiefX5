import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './index.css';
import logo from './img/5ka.png'

export default function ButtonAppBar() {
  return (
    
    <Box sx={{ flexGrow: 1}}>
      <AppBar  position="static">
        <Toolbar className='appBar'>
            <Typography className='titleAppBar' variant="h2" component="div" sx={{ flexGrow: 1 }}>
            Их разысивает
            <img src={logo} alt='logo' className='logo'/>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}