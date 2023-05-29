import React from 'react'
import Navbar from './Navbar'
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <Stack>
            <Navbar/>
            <Box style={{marginTop:85, height:'500px', width:'100%',backgroundImage: 'url(/images/hero/slider-1.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center',
                display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:"flex-start"}}>
                <Box sx={{display:'flex', gap:2, flexDirection:'column', ml:{xs:2, sm:10}, mt:15}}>
                    <Box>
                        <Stack direction='row' gap={2}>
                            <Typography variant='h3' style={{fontWeight:'bold', color:'#343c5c'}}>You</Typography>
                            <Typography variant='h3' style={{fontWeight:'bold',
                            padding:0, color:'#6cdebc', textDecorationLine:'underline', textDecorationThickness:5, textDecorationColor:'#6cdebc',
                            }}>Think</Typography>
                        </Stack>
                        <Typography variant='h3' style={{fontWeight:'bold', color:'#343c5c'}}>We Deliver</Typography>
                    </Box>
                    <Typography variant='body1' style={{color:'black', maxWidth:500}}>
                        Spraxa is the leading Information Technology services provider. Our expertise in the area of technology and our innovative methodologies enable us to create a huge impact on our clients’ business – which is what drives us
                    </Typography>
                    <Link to='/about' style={{textDecoration:'none'}}>
                        <Button variant='contained' 
                        style={{width:150,height:50, backgroundColor:'#6cdebc', 
                        color:'white', fontWeight:'bold', marginTop:10}}
                        // onClick={() => navigate('/about')}
                        >Learn More</Button>
                    </Link>
                </Box>
            </Box>
        </Stack>
    
  )
}

export default Header