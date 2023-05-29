import { Grid, Typography } from '@mui/material'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import facebook from '../images/social/facebook.png'
import twitter from '../images/social/twitter.png'
import linkedIn from '../images/social/linkedin.png'

const Contact = () => {
    const socialIcons = [
        { name: 'facebook', icon: facebook, link: 'https://www.facebook.com/spraxasolutions' },
        { name: 'twitter', icon: twitter, link: 'https://twitter.com/SpraxaSolutions' },
        { name: 'linkedIn', icon: linkedIn, link: 'https://www.linkedin.com/company/spraxa-solutions-pvt-ltd' },
      ]

    const CustomContacts = {
        display:'flex',
        alignItems:'center',
        gap: 10
    }

  return (
    <Grid container style={{paddingTop:20, display:'flex', flexDirection:'column', gap: 20, paddingLeft:50, paddingRight:50}}>
        <Grid item xs={12} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Typography variant="h4">Contact Us</Typography>
            <Typography variant="body1">We are here to help and answer any question you might have. We look forward to hearing from you.</Typography>
        </Grid>
        <Grid item xs={12} style={{display:'flex', gap:20, alignItems:'center'}}>
            <img src="/images/contactus1.jpg" width={1000} alt="contact us"/>
            <Grid container style={{display:'flex', flexDirection:'column', gap:20}}>
                <Grid item style={CustomContacts}>
                    <PhoneIcon/>
                    <Typography variant="body2">0120-4167004, +91-9354701277 (India), +1-571-346-7306 (US)</Typography>
                </Grid>
                <Grid item style={CustomContacts}>
                    <MailIcon/>
                    <a href='mailto: mail@spraxa.com'><Typography variant="body2">mail@spraxa.com</Typography></a>
                </Grid>
                <Grid container style={{display:'flex', alignItems:'center', gap:10}}>
                    <Typography>Follow Us: </Typography>
                    <Grid item style={{display:'flex', gap:30}}>
                        {socialIcons.map((icon) => (
                            <a key={icon.name} href={icon.link} target="_blank" rel="noreferrer">
                                <img src={icon.icon} alt={icon.name + ' logo'} width='30px'></img>
                            </a>
                        ))}
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
        <Grid item xs={12} style={{display:'flex',flexDirection:'column', alignItems:'center', gap:5}}>
            <Typography variant="h5" style={{fontWeight:'bold'}}>Find Us On Google Maps</Typography>
            <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=spraxa%20solutions%20kaushambi%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </Grid>
</Grid>    
  )
}

export default Contact