import { Grid, Typography } from '@mui/material'
import React from 'react'

const Product = () => {
  return (
    <Grid container>
      <Grid item>
        <Grid container>
          <Grid item>
            <img src='/images/products/kundli.jpg'></img>
          </Grid>
          <Grid item>
            <Typography>Kundli Mobile</Typography>
            <Typography>
              The Kundli application is made by Durlabh Jain. Kundli app provides you with kundli or Janma Kundali 
              creation, dosha reports and their specific remedies, gemstone suggestions based on birth kundli, 
              various astrological calculations, Answers to the Kundli related questions, daily personalised horoscope,
              even Match Making and much more completely free. Kundli app is an ultimate app on Vedic Astrology created
              using accurate and ancient Vedic Astrological techniques and methods.
            </Typography>
          </Grid>
        </Grid>
          
      </Grid>
    </Grid>
  )
}

export default Product