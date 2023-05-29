import React from 'react'
import { Box, Grid } from '@mui/material'
import Footer from '../components/Footer'
import Clients from '../components/home/Clients'
import Testimonials from '../components/home/Testimonials'
import Counter from '../components/home/Counter'
import Portfolio from '../components/home/Portfolio'
import Header from '../components/Header'

const Home = () => {
  return (
      <Grid container style={{display:"flex", flexDirection:'column',alignItems:'center', justifyContent:'center', gap:40, marginTop:'60px'}}>
        <Counter/>
        <Portfolio/>
        <Testimonials/>
        <Clients/>
      </Grid>    
  )
}

export default Home