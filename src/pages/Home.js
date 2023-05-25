import React from 'react'
import HeroSection from '../components/home/Hero'
import { Box, Grid } from '@mui/material'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Clients from '../components/home/Clients'
import Testimonials from '../components/home/Testimonials'
import Counter from '../components/home/Counter'
import Portfolio from '../components/home/Portfolio'
import WhyUs from '../components/home/WhyUs'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Grid container style={{display:"flex", flexDirection:'column',alignItems:'center', justifyContent:'center', gap:40, marginTop:'60px'}}>
        <HeroSection/>
        <WhyUs/>
        {/* <Counter/> */}
        <Portfolio/>
        <Testimonials/>
        <Clients/>
      </Grid>
    </>
    
  )
}

export default Home