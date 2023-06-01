import { Link, ButtonGroup, Grid, Typography, Box } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import { CustomColor, SectionHeader } from '../styles'
import NormalText from '../components/Common/BodyContent'


const Products = () => {
  return (
    <>
        <Grid container sx={{display:'flex', flexDirection:'column',gap: 5, paddingTop:5,ml:{xs:2, sm:5}}}>
            <Grid item>
                <Grid container style={{display:'flex', flexDirection:'row', gap:20}}>
                    <Grid item style={{}}>
                        <img src='/images/products/kundli.jpg' width={500}></img>
                    </Grid>
                    <Grid item style={{width:'57%', display:'flex', flexDirection:"column", gap:10}}>
                        <Typography variant='h5' style={{fontWeight:'bold'}}>Kundli Mobile</Typography>
                        <NormalText text="
                        The Kundli application is made by Durlabh Jain. Kundli app provides you with kundli or Janma Kundali 
                        creation, dosha reports and their specific remedies, gemstone suggestions based on birth kundli, 
                        various astrological calculations, Answers to the Kundli related questions, daily personalised horoscope,
                        even Match Making and much more completely free. Kundli app is an ultimate app on Vedic Astrology created
                        using accurate and ancient Vedic Astrological techniques and methods." />
                        <Box style={{display:'flex', alignItems:"center", gap:10}}>
                            <a href='https://play.google.com/store/apps/details?id=com.durlabh.kundli&hl=en_IN'>
                                <Typography variant='body1' style={{fontWeight:'bold'}}>Download for Android</Typography>
                            </a>
                            <a href='https://apps.apple.com/in/app/kundli-by-durlabh-jain/id1043514973'>
                                <Typography variant='body1' style={{fontWeight:'bold'}}>Download for IOS</Typography>
                            </a>
                        </Box>
                    </Grid>
                    </Grid>    
                </Grid>

            <Grid item>
                <Grid container style={{display:'flex', gap:20}}>
                    <Grid item style={{width:'57%', display:'flex', flexDirection:"column", gap:10}}>
                        <Typography variant='h5' style={{fontWeight:'bold'}}>Shikhar App</Typography>
                        <NormalText text="
                        This online application can help you to enter your petty expenses with attaching the receipts." />
                    </Grid>
                    <Grid item style={{}}>
                        <img src='/images/products/shikhar.PNG' width={500}></img>
                    </Grid>
                </Grid>    
            </Grid>

            <Grid item>
                <Grid container style={{display:'flex', gap:20}}>
                    <Grid item style={{}}>
                        <img src='/images/products/exception.png' width={500}></img>
                    </Grid>
                    <Grid item style={{width:'57%', display:'flex', flexDirection:"column", gap:10}}>
                        <Typography variant='h5' style={{fontWeight:'bold'}}>Exception Browser</Typography>
                        <NormalText text="
                        Exception Browser is used for error logging and email notification to the group. 
                        For different project we can create email group for notification. Through this software, 
                        Error tracing is easy which saves the developer time on debugging for large and small Projects."/>
                    </Grid>
                </Grid>    
            </Grid>
        </Grid>
    </>

  )
}

export default Products