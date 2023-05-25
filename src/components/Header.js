import React from 'react'
import Navbar from './Navbar'
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from 'react-router';
import { Box, Grid, Typography } from '@mui/material';

const Header = () => {
    const location = useLocation()
    const title = location.pathname.split('/')[1]
    const headerTitle = title.charAt(0).toUpperCase() + title.slice(1)

    return (
        <Grid container style={{marginBottom:50}}>
            <Navbar/>
            <Grid item style={{ height:'400px', width:'100%',backgroundImage: 'url(/images/bannerbg.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center',
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:"center"}}>
                <Typography variant='h2' style={{fontWeight:'bold', color:'white'}}>{headerTitle}</Typography>
                <Box style={{display:'flex', alignItems:'center', justifyContent:"center"}}>
                    <Box style={{display:'flex',alignItems:'center', justifyContent:"center", gap:3}}>                
                        <HomeIcon style={{color:'white', fontSize: 30}}/>
                        <Typography variant="h6" style={{fontWeight:'bold', color:'white'}}>
                            Home / {headerTitle}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    
  )
}

export default Header