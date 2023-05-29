import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import facebook from '../images/social/facebook.png'
import twitter from '../images/social/twitter.png'
import linkedIn from '../images/social/linkedin.png'
import { ArrowForward} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Heading = styled(Typography)(({theme})=>({
  fontWeight:"bold"
}))

const FooterLink = styled('a')(({theme})=>({

}))

const Footer = () => {
  const socialIcons = [
    { name: 'facebook', icon: facebook, link: 'https://www.facebook.com/spraxasolutions' },
    { name: 'twitter', icon: twitter, link: 'https://twitter.com/SpraxaSolutions' },
    { name: 'linkedIn', icon: linkedIn, link: 'https://www.linkedin.com/company/spraxa-solutions-pvt-ltd' },
  ]
  const QuickLinks = [
    { name: 'Home', link: '/home' },
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Products', link: '/Products' },
    { name: 'Industries', link: '/industries' },
    { name: 'Career', link: '/careers' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'Technology', link: '/technology' },
  ]

  const Services = [
    { name: 'Mobile App Development', link: '/mobile-app-development' },
    { name: 'Web Development', link: '/web-development' },
    { name: 'Application Management', link: '/application-management' },
    { name: 'Platform Solutions', link: '/platform-solutions' }
  ]


  return (
      <footer style={{marginTop:20, width:'100%', backgroundColor:'#f8f9fa'}}>
        <Grid container xs={12} sx={{
          display:'flex', flexWrap:'wrap',pt:2, justifyContent:'space-evenly'}}>
          <Grid item sx={{display:'flex', flexDirection:'column', alignItems:'center', maxWidth:'400px'}}>
            <Heading>Call Us</Heading>
            <Typography variant='h5' style={{color:'#0fac7d', fontWeight:"bold"}}>0120-4167004, +91-9354701277 (India) +1-571-346-7306 (US)</Typography>
            <Typography>201, 2nd floor 45 Bansal Chambers Kaushambi Ghaziabad - (U.P) 201010, (Near Kaushambi Metro Station)</Typography>
          </Grid>

          <Grid item sx={{display:'flex', flexDirection:'column', alignItems:'center',}}>
            <Heading>Quick links</Heading>
            <Box sx={{display:'flex', flexDirection:'column', gap:0.5}}>
              {QuickLinks.map((link) => (
                <Link to={`${link.link}`} style={{color:'black'}}>
                  <Typography variant='body2'>{link.name}</Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item sx={{display:'flex', flexDirection:'column', alignItems:'center',}}>
            <Heading>Services</Heading>
            <Box sx={{display:'flex', flexDirection:'column', gap:0.5}}>
              {Services.map((link) => (
                <Link to={`${link.link}`} style={{color:"black"}}>
                  <Typography variant='body2'>{link.name}</Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item>
            <Heading variant="body1">Our Certifications</Heading>
            <Box style={{display:'flex', flexDirection:'column'}}>
              <img src='/images/microsoft_gold.png' alt='microsoft_gold' width={150}></img>
              <img src='/images/reliablesite.png' alt='reliablesite' width={150}></img>
            </Box>
          </Grid>

          <Grid item sx={{ borderTop:'1px solid black', padding:'5px', width:'100%', display:'flex',
            flexDirection:{xs:"column", sm:'row'},
           alignItems:'center', justifyContent: 'space-between'}}>
            <Typography variant="body1">Terms of service | Privacy policy</Typography>
            <Box sx={{display:'flex', gap:2}}>
              {socialIcons.map((icon) => (
                  <a key={icon.name} href={icon.link} target="_blank" rel="noreferrer">
                    <img src={icon.icon} alt={icon.name + ' logo'} width='30px'></img>
                  </a>
              ))}
            </Box>
          </Grid>
          <Grid item style={{display:'flex', alignSelf:"center"}}>
            <Typography variant="body1">
              © 2023 Spraxa Solutions Pvt Ltd. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </footer>
  )
}

export default Footer