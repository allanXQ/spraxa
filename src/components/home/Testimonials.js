import { Avatar, Box, Card, Grid, Typography, styled } from '@mui/material';
import React from 'react'
import { Pagination,Autoplay,EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { SectionHeader } from '../Common/Headings';
import { VrCard } from '../Common/CustomCards';



const  Testimonials = () => {

    const testimonials = [
        {
            image:'1.jpg',
            name:"Rakeesh Saraff",
            title:'(Director) Infodrive India Pvt Ltd',
            description: "Having a 20 year long association with Spraxa has been a great experience. They have always gone an extra mile to meet our needs, especially in resolving crisis, and never failed to deliver on time."        
        },
        {
            image:'1.jpg',
            name:"Brian Ellis",
            title:'Tailored Logistics',
            description: "Spraxa team consists of some of the brightest people in the industry, I have worked with a number of knowledgeable and expirenced people."
        
        },
        {
            image:'1.jpg',
            name:"Katie Chang",
            title:'Benten Solutions',
            description: "Spraxa team consists of some of the brightest people in the industry, I have worked with a number of knowledgeable and expirenced people."
        
        }
    ]

    return (
      <Grid container style={{display:'flex',flexDirection:"column", justifyContent:'center', alignItems:'center', gap:20}}>
          <Grid item >
              <SectionHeader title='Testimonials'/>
          </Grid>
          <Grid item style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
            <Typography>
                If you need any IT solution we are available for you. 
                As an IT solution provider company, we are committed to deliver the best technology solutions to our clients.
            </Typography>
            <Typography style={{fontWeight:"bold", color:"#0fac7d"}}>
                Here is what our clients say about us
            </Typography>
          </Grid>
          <Grid item sx={{display:'flex', flexWrap:'wrap',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent:'center',
           alignItems:'center', gap:5}}>
                  {
                    testimonials.map((testimonial, index) => (
                        <VrCard 
                            key={index}
                            width={300}
                            height={350}
                            image={testimonial.image}
                            avatar={true}
                            title={testimonial.name}
                            subtitle={testimonial.title}
                            description={testimonial.description}
                            readMore={false}
                            bgColor='#0fac7d'
                            color='white'
                        >
                        </VrCard>
                    ))
                  }
          </Grid>
      </Grid>
    )
  }
  
  export default Testimonials