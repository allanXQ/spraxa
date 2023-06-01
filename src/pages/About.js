import React from 'react'
import Header from '../components/Header'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { HrCard, VrCard } from '../components/Common/CustomCards'
import { SectionHeader } from '../styles'
import { CustomColor } from '../styles'
import NormalText from '../components/Common/BodyContent'

const About = () => {
    const Executives = [
        { 
            name: 'Yen Dutt Jain', 
            position: 'CEO', 
            image: 'yen.png',
            description: "Yen Dutt Jain started working with Spraxa Solutions Pvt. Ltd. in its hardware division. He was mainly responsible for handling the support business. After departure of Durlabh Jain from Spraxa Solutions, Yen Dutt Jain took upon him to guide Spraxa Solutions Pvt. Ltd. to achieve greater heights in Software Development arena. Being an Ex-Employee of Fujitsu, he brings decades of experience to the company."
        },
        { 
            name: 'Durlabh Jain', 
            position: 'MENTOR / GURU', 
            image: 'dj.png',
            description:"Former project manager at Fujitsu managing over 200 people. Scaled software specialist with 30 years of experience."
        }
    ]
  return (
        <Grid container sx={{display:'flex', flexDirection:'column', gap:2, ml:{xs:2, sm:5}, mt:0}}>
            <Typography sx={{
                color:'secondary.main',
                fontSize:'2rem',
                fontWeight:'bold',
                display:'flex',
                alignSelf:"center"
                }}>BEST SERVICES AND CONSULTING FOR BUSINESS</Typography>
            <Grid item xs={12} sx={{display:'flex'}}>
                <HrCard
                    width={1250}
                    height='auto'
                    title='EXECUTIVE LEADERSHIP'
                    image='team.jpg'
                    imgWidth='100%'
                    imgHeight='auto'
                    imgPath='about'
                    subtitle="We are ready to provide you the best services to do bussiness anywhere in the world."
                    description="Spraxa Solutions is a pioneer in delivering Information Technology solutions. As a leading IT solution provider company, we are committed to deliver the best technology solutions to our clients. We have developed expertise in almost all IT related areas over the years, such as – software development, IT consulting, support, training, staff augmentation etc. It is important to identify the business problems of a client, understand them, and then come up with the most effective solution that could save the client’s resources as well. And that is exactly what we do. Information Technology is a boon and we know how to take the best out of it, to ensure the growth of your business."
                />
            </Grid>

            <Grid item xs={12} sx={{display:'flex',flexDirection:'column'}}>
                <Box sx={{display:'flex',flexDirection:'column', gap:0.5}}>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <Typography sx={
                            {
                                ...SectionHeader,
                                textDecorationLine:'underline',
                                textDecorationThickness:5,
                                textDecorationColor: CustomColor.primary,
                            }
                            }>EX</Typography>
                        <Typography  sx={SectionHeader}>ECUTIVE</Typography>
                    </Box>
                <NormalText text="Meet our professional and experienced team"/>
                </Box>
                    <Box sx={(theme)=>({
                        display:'flex',
                        gap:5, 
                        justifyContent:'center',
                        alignItems:'center',
                        [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
                            flexDirection:'column',
                        },
                    })}>
                        {Executives.map(executive => (
                            <VrCard 
                                key={executive.name}
                                width={500}
                                height={700}
                                title={executive.name}
                                subtitle={executive.position}
                                image={executive.image}
                                imgWidth={400}
                                imgHeight={400}
                                imgPath='about'
                                description={executive.description}
                                avatar={false}
                                readMore={false}
                            />
                        ))}
                    </Box>
            </Grid>

            <Grid item xs={12} sx={{display:'flex'}}>
                <HrCard
                    width={1250}
                    height='auto'
                    title='OUR PARTNERS'
                    image='partners.jpg'
                    imgWidth='100'
                    imgHeight='auto'
                    imgPath='about'
                    description="We are a Microsoft certified partner and an IBM partner. Since, clients’ service is our priority, we find it extremely important to associate with other leading IT service companies, so that we can provide the best of the solutions. Spraxa remains a place of technological innovation and quality services, and it will continue to be the same through reliable associations."
                    avatar={false}
                    readMore={false}
                    reverse={false}
                />
            </Grid>
        </Grid>  
    )
}

export default About
