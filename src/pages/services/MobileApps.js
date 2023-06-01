import { Box, Typography } from '@mui/material'
import React from 'react'
import { HrCard } from '../../components/Common/CustomCards'

const MobileApps = () => {
  return (
    <Box style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
      <Typography sx={{
                color:'secondary.main',
                fontSize:'3rem',
                fontWeight:'bold',
                display:'flex',
                alignSelf:"center"
                }}>BEST SERVICES AND CONSULTING FOR BUSINESS</Typography>
        <Box>
            <HrCard
                width={1250}
                height='auto'
                title='MOBILE APPS'
                image='mobilebg.jpg'
                imgWidth='100%'
                imgHeight='auto'
                imgPath='services/service'
                description='The popularity of mobile applications has risen tremendously. With the proliferation of high speed networks, smart phones and coupled with the fact that information needs to be available on the go, it has become very essential for software companies to have a mobile version of the application to complete their product offering in addition users always seek to make their lives simpler by accessing applications for information, utility, entertainment, etc.'
            />
        </Box>
    </Box>
  )
}

export default MobileApps