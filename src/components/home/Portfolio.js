import { Card, CardContent, Typography,Grid } from '@mui/material'
import React from 'react'

const Portfolio = () => {
  const Projects = [
    {
      title:'Spraxa',
      filename:'spraxa.png'
    },
    {
      title:'Coolr',
      filename:'coolr.png'
    },
    {
      title:'Exception Browser',
      filename:'exceptionbrowser.png'
    },
    {
      title:'Kundli',
      filename:'kundli.png'
    },
    {
      title:'Orflow',
      filename:'orflow.png'
    },
    {
      title:'Realwave',
      filename:'realwave.png'
    },
    {
      title:'Tailored Logistics',
      filename:'tailoredlogistics.png'
    },
    {
      title:'Volza',
      filename:'volza.png'
    },
  ]


  return (
    <Grid container style={{display:"flex", flexDirection:'column',alignItems:'center', justifyContent:'center', gap:40}}>
      <Typography variant='h4' style={{fontWeight:'bold'}}>Portfolio</Typography>
      <Grid item style={{display:"flex", flexDirection:'row', alignItems:'center', justifyContent:'center', flexWrap:"wrap", gap:40}}>
        {
          Projects.map((project, index) => (
            <Card key={index} style={{display:"flex", flexDirection:'column', gap:40, width:'fit-content'}}>
              <CardContent style={{display:"flex", flexDirection:'column', gap:40}}>
                <img src={`/images/portfolio/${project.filename}`} alt={project.title} width={250} style={{}}/>
              </CardContent>
            </Card>
          ))
        }
      </Grid>
    </Grid>
  )
}

export default Portfolio