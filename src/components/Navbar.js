import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
// import logo from '../images/logo.png'
// import anniversary from '../images/anniversary.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const pages = ['Home', 'About', 'Services', 'Products', 'Jobs', 'Contact']
  return (
    <AppBar sx={{backgroundColor:'white'}}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', gap:5}}>
                <img src="/images/logo.png" alt="logo" width={150} height={50}/>
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
