import React from 'react'
import { HrCard } from '../../components/Common/CustomCards'
import { Box, Typography } from '@mui/material'

const PlatformSolutions = () => {
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
                title='PLATFORM SOLUTIONS'
                image='platformsolns.jpg'
                imgWidth='100%'
                imgHeight='auto'
                imgPath='services/service'
                description={[
                    "WordPress base design, development and customization",
                    "Joomla based design, development, customization and integration",
                    "Microsoft Sharepoint 2003/ 2007/ 2010 Deployment, Customization and Maintenance",
                    "Microsoft SQL Server 2000/ 2005/ 2008/ 2008 R2 – Analysis, Database Design, Optimization and Review",
                    "Microsoft SQL Server Reporting Services – Analaysis, Report Design, Scheduling and Integration",
                    "Microsoft SQL Server Analysis Services – Analysis, Cube Creation, Maintenance, Optimization and Review."
                ]}
            />
        </Box>
    </Box>
  )
}

export default PlatformSolutions