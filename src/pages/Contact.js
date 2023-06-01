import { Box, Grid, Typography} from '@mui/material'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import facebook from '../images/social/facebook.png'
import twitter from '../images/social/twitter.png'
import linkedIn from '../images/social/linkedin.png'
import { SectionGap, SectionHeader, CustomColor } from '../styles';
import NormalText from '../components/Common/BodyContent';

const Contact = () => {
    const socialIcons = [
        { name: 'facebook', icon: facebook, link: 'https://www.facebook.com/spraxasolutions' },
        { name: 'twitter', icon: twitter, link: 'https://twitter.com/SpraxaSolutions' },
        { name: 'linkedIn', icon: linkedIn, link: 'https://www.linkedin.com/company/spraxa-solutions-pvt-ltd' },
      ]

    const CustomContacts = {
        display:'flex',
        alignItems:'center',
        gap: 2
    }

  return (
    <>
        <Box sx={{display:'flex',flexDirection:'column', gap:0.5, ml:{xs:2, sm:5}, mt:0}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Typography sx={
                    {
                        ...SectionHeader,
                        textDecorationLine:'underline',
                        textDecorationThickness:5,
                        textDecorationColor: CustomColor.primary,
                    }
                    }>CONTA</Typography>
                <Typography sx={SectionHeader}>CT US</Typography>
            </Box>
            <NormalText text="We are here to help and answer any question you might have. We look forward to hearing from you."/>
        </Box>
        <Grid container sx={{display:'flex', flexDirection:'column', gap: SectionGap}}>
            <Grid item xs={12} sx={{display:'flex', gap:5, alignItems:'center', ml:{xs:2, sm:5}, mt:2}}>
                <img src="/images/contactus1.jpg" width={1000} alt="contact us"/>
                <Grid container sx={{display:'flex', flexDirection:'column', gap:2}}>
                    <Grid item sx={CustomContacts}>
                        <PhoneIcon/>
                        <NormalText text='0120-4167004, +91-9354701277 (India), +1-571-346-7306 (US)'/>
                    </Grid>
                    <Grid item sx={CustomContacts}>
                        <MailIcon/>
                        <a href='mailto: mail@spraxa.com'><NormalText text='mail@spraxa.com' /></a>
                    </Grid>
                    <Grid container sx={{display:'flex', alignItems:'center', gap:2}}>
                        <NormalText text='Follow Us: ' />
                        <Grid item sx={{display:'flex', gap:1}}>
                            {socialIcons.map((icon) => (
                                <a key={icon.name} href={icon.link} target="_blank" rel="noreferrer">
                                    <img src={icon.icon} alt={icon.name + ' logo'} width='30px'></img>
                                </a>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{display:'flex',flexDirection:'column', gap:2,ml:{xs:2, sm:5}}}>
                <Box sx={{display:'flex',flexDirection:'column', gap:0.5}}>
                    <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                        <Typography sx={
                            {
                                ...SectionHeader,
                                textDecorationLine:'underline',
                                textDecorationThickness:5,
                                textDecorationColor: CustomColor.primary,
                                
                            }
                            }>FIND</Typography>
                        <Typography sx={SectionHeader}>US ON GOOLE MAPS</Typography>
                    </Box>
                    <NormalText text="We are located 2 minutes from kaushambi Metro Station and 5 minutes from Anand Vihar metro station / bus station."/>
                </Box>
                <iframe width="90%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=spraxa%20solutions%20kaushambi%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </Grid>
        </Grid>  
    </>
  
  )
}

export default Contact