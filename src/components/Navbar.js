import { AppBar, Box, Toolbar, Hidden, Drawer, IconButton, List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
    const pages = ['Home', 'About', 'Services', 'Products', 'Jobs', 'Contact']
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    const drawer = (
        <div>
            <List>
                {pages.map((page) => (
                    <ListItem button key={page} onClick={handleDrawerToggle}>
                        <NavLink to={`/${page.toLowerCase()}`} className='NavLink'>{page}</NavLink>
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <AppBar sx={{backgroundColor:'white'}}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between', mt:'10px', mb:'10px'}}>
                <Box sx={{display:'flex', gap:5}}>
                    <img src="/images/logo.png" alt="logo" style={{width:200, height:50}}/>
                    <img src="/images/anniversary.png" alt="anniversary"/>
                </Box>

                <Hidden smUp>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>

                <Hidden xsDown implementation="css">
                    <Box sx={{display:'flex', gap:5}} className="navbar">
                        {pages.map(page => (
                            <NavLink to={`/${page.toLowerCase()}`} className='NavLink'>{page}</NavLink>
                        ))}
                    </Box>
                </Hidden>
            </Toolbar>

            <nav>
                <Hidden smUp implementation="js">
                    <Drawer
                        variant="temporary"
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </AppBar>
    )
}

export default Navbar
