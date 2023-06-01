import { Grid, Typography } from '@mui/material';
import React from 'react'
import { Pagination,Autoplay,EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { SectionHeader } from '../Common/Headings';

const importAllImages = (r) => {
    let images = [];
     r.keys().forEach((item, index) => { images.push(item.replace('./', ''))});
    return images
   }
const images = importAllImages(require.context('../../images/clients/', false, /\.(png|jpe?g|svg)$/));

const Clients = () => {
  return (
    <Grid container style={{display:'flex', flexDirection:'', justifyContent:'center', alignItems:'center', gap:20}}>
        <Grid item style={{}}>
            <SectionHeader title='Our Clients'/>
        </Grid>
        <Grid item style={{overflow:"hidden", gap:50}}>
            <Swiper
                modules={[Pagination,Autoplay,EffectCoverflow]}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    }
                }}
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <img src={`/images/clients/${image}`} alt={image.replace(/\.(png|jpe?g|svg)$/, '')} style={{width:'150px'}}/>
                        </SwiperSlide>
                ))}
            </Swiper>
        </Grid>
    </Grid>
  )
}

export default Clients