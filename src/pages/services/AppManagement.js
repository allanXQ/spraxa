import React from 'react'
import { HrCard } from '../../components/Common/CustomCards'
import { Box, Typography } from '@mui/material'

const AppManagement = () => {
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
                title='APPLICATION MANAGEMENT & SUPPORT'
                image='culture.jpg'
                imgWidth='100%'
                imgHeight='auto'
                imgPath='services/service'
                description='Spraxa offers comprehensive application lifecycle management services that include maintenance of, adding new functionality to and providing support for existing applications. We have fixed bid, time and materials, and hybrid pricing options as well as the choice of an engagement model that includes the full range of managed services.'
            />
        </Box>
    </Box>
  )
}

export default AppManagement