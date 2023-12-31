import React from 'react';
import Navbar from './Nav';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

export default function Base() {


  return (
    <Box>
      <Grid container display="flex" flexDirection="column" minHeight="100vh" justifyContent="space-between">
        <Grid item>
          <Navbar/>
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box component="footer" display="flex" flexDirection="column" alignItems="center" py="1.5rem" sx={{ opacity: 0.7 }} width="100%">
            <p>created by &hearts; Reagan Yang</p>
            <p>&copy; 2023</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
