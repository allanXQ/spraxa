import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const pages = ['Home', 'About', 'Services', 'Products', 'Jobs', 'Contact']
  return (
    <AppBar sx={{backgroundColor:'white'}}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between', mt:'10px', mb:'10px'}}>
            <Box sx={{display:'flex', gap:5}}>
                <img src="/images/logo.png" alt="logo" style={{width:200, height:50}}/>
                <img src="/images/anniversary.png" alt="anniversary"/>
            </Box>
            
            <Box sx={{display:'flex', gap:5}} className="navbar">
                {pages.map(page => (
                    <NavLink to={`/${page.toLowerCase()}`} className='NavLink'>{page}</NavLink>
                ))}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
