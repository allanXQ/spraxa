import { Typography,Grid, Box } from '@mui/material'
import React from 'react'
import PortfolioCard from '../Common/PortfolioCard'
import { SectionHeader } from '../Common/Headings'

const Portfolio = () => {
  const Projects = [
    {
      title:'Spraxa',
      image:'spraxa.png'
    },
    {
      title:'Coolr',
      image:'coolr.png'
    },
    {
      title:'Exception Browser',
      image:'exceptionbrowser.png'
    },
    {
      title:'Kundli',
      image:'kundli.png'
    },
    {
      title:'Orflow',
      image:'orflow.png'
    },
    {
      title:'Realwave',
      image:'realwave.png'
    },
    {
      title:'Tailored Logistics',
      image:'tailoredlogistics.png'
    },
    {
      title:'Volza',
      image:'volza.png'
    },
  ]


  return (
    <Grid container style={{display:"flex", flexDirection:'column',alignItems:'center', justifyContent:'center', gap:40}}>
      <SectionHeader title='Our Portfolio'/>
      <Grid item style={{display:"flex", flexDirection:'row', alignItems:'center', justifyContent:'center', flexWrap:"wrap", gap:40}}>
        {
          Projects.map((project, index) => (
            <PortfolioCard image={project.image} title={project.title}/>
          ))
        }
      </Grid>
    </Grid>
  )
}

export default Portfolio