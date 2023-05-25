import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const WhyUs = () => {
  return (
    <Grid container style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:40}}>
        <Grid item>
            <Grid container style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:20}}>
                <Grid item style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:40}}>
                    <Typography variant='h4' style={{fontWeight:'bold'}}>Why Choose Us</Typography>
                </Grid>
                <Grid item style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:40}}>
                We are a team of like-minded people who do business, understands the ideas and realize them.
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <img src='/images/whyus2.png' alt='whyus' width='100%'/>
                <Box item style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:40}}>
                    <Typography variant='h4' style={{fontWeight:'bold'}}>Why Choose Us</Typography>
                    <Typography variant='h6' style={{fontWeight:'bold'}}>
                        We are a team of like-minded people who do business, understands the ideas and realize them.
                    </Typography>
                </Box>
        </Grid>
    </Grid>
  )
}

export default WhyUs