import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import facebook from '../images/social/facebook.png'
import twitter from '../images/social/twitter.png'
import linkedIn from '../images/social/linkedin.png'
import { ArrowForward} from '@mui/icons-material'
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
    { name: 'Technologies', link: '/technologies' },
  ]

  const Services = [
    { name: 'Mobile App Development', link: '/mobile-app-development' },
    { name: 'Web Development', link: '/web-development' },
    { name: 'Application Management', link: '/application-management' },
    { name: 'Platform Solutions', link: '/platform-solutions' }
  ]


  return (
      <footer style={{position:'absolute', bottom:0, width:'100%'}}>
        <Grid container xs={12} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        {/* Quick links */}
        <Grid item xs={12} sm={6} sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center'}}>
          <Typography variant="body1">Quick links</Typography>
          <Box sx={{display:'flex', flexDirection:'column'}}>
            {QuickLinks.map((link) => (
              <Typography key={link.name} variant="body1" sx={{display:'inline', padding:'0 10px'}}>
                {/* <ArrowForward/> */}
                <a href={link.link}>{link.name}</a>
              </Typography>
            ))}
          </Box>
        </Grid>
        {/* services */}
        <Grid item xs={12} sm={6} sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center'}}>
          <Typography variant="body1">Services</Typography>
          <Box sx={{display:'flex', flexDirection:'column'}}>
            {Services.map((link) => (
              <Typography key={link.name} variant="body1" sx={{display:'inline', padding:'0 10px'}}>
                {/* <ArrowForward/> */}
                <a href={link.link}>{link.name}</a>
              </Typography>
            ))}
          </Box>
        </Grid>


        {/* privacy */}
          <Grid item sx={{ borderTop:'1px solid black', paddingTop:'5px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
            <Typography variant="body1">Terms of service | Privacy policy</Typography>
            <Box sx={{display:'flex', gap:2}}>
              {socialIcons.map((icon) => (
                  <a key={icon.name} href={icon.link} target="_blank" rel="noreferrer">
                    <img src={icon.icon} alt={icon.name + ' logo'} width='30px'></img>
                  </a>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              © 2023 Spraxa Solutions Pvt Ltd. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </footer>
  )
}

export default Footer