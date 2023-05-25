import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../CustomButton'
import { useNavigate } from 'react-router'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
        <Grid item xs={12} style={{
        display:'flex', alignItems:'center', justifyContent:'center',height:'40px',
        backgroundImage:'url(/images/hero/herobg9.jpg)', backgroundSize:'cover', 
        backgroundPosition:'center', backgroundRepeat:"no-repeat"}}>
          <Grid container sm={11} style={{display:'flex', height:'100vh',flexDirection:'row', alignItems:'center', justifyContent:"center"}}>
            <Grid item sm={6} style={{}}>
              <Box style={{display:'flex', flexDirection:"column", gap:20, color:'white'}}>
                <Typography variant='h2' style={{fontWeight:'bold'}}>You Think We Deliver</Typography>
                <Typography variant='body2' style={{}}>
                Unlock your business's true potential with Spraxa's cutting-edge Information Technology solutions. Our unrivaled expertise and groundbreaking methodologies are tailored to make a transformative impact on your organization. Discover the power of seamless technology integration, enhanced efficiency, and accelerated growth.
                Experience the difference Spraxa can make for your business. Contact us today and let us deliver unparalleled IT services that drive success. Together, we can achieve greatness.
                </Typography>
                <CustomButton text="Get Started" onClick={()=>(navigate('/about'))}/>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box>
                  <img src="/images/hero/heroimg.png" alt="hero" style={{width:'100%'}}/>
              </Box>
            </Grid>
          </Grid>    
        </Grid>
  )
}

export default HeroSection