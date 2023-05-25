import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const Counter = () => {
    const Stats = [
        {
            title:'Happy Clients',
            count:500,
        },
        {
            title:'Skilled Professionals',
            count:51,
        },
        {
            title:'Technologies',
            count:20
        },
        {
            title:'Years of Experience',
            count:25
        },

    ]
  return (
    <Grid container style={{backgroundImage: 'url(/images/statsbg2.jpg)', display:"flex", 
        justifyContent:'center', alignItems:'center',}}>
        <Grid item style={{display:"flex", gap:20, justifyContent:'center',
         alignItems:'center', backgroundColor:'transparent', margin:'20px 0 20px 0'
         }}>
            {
                Stats.map((stat, index) => (
                    <Card key={index} style={{
                        display:"flex", flexDirection:'column',
                         alignItems:"center", justifyContent:'center', borderWidth:'10px 2px 2px 2px', borderStyle:'solid', borderColor:'#09aff4',   borderRadius:'10px',
                          backgroundColor:'transparent', width:'250px', height:"200px"}}>
                        <CardContent style={{color:'white',display:"flex", flexDirection:'column', alignItems:"center", justifyContent:'center', backgroundColor:'transparent'}}>
                            <Typography variant='h3' style={{fontWeight:'bold'}}>{stat.count}+</Typography>
                            <Typography variant='h6' style={{fontWeight:'bold'}}>{stat.title}</Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </Grid>  
    </Grid>              
  )
}

export default Counter