import React from 'react'
import Header from '../components/Header'
import { VrCard } from '../components/Common/CustomCards'
import { Box } from '@mui/material'

const Services = () => {
    const Services = [
        { 
            title:'Mobile Apps', 
            description: 'Mobile app popularity has surged due to fast networks and the need for on-the-go information. Software companies must have a mobile version to stay competitive. Users crave simplicity and access apps for info, utility, and entertainment.',
            image:'mobileapp.png',
            link:"mobileapps",
            readMore: true
        },
        { 
            title:'Web & (UI/UX) Design', 
            description:'In July, 2007, Spraxa Solutions expanded into web-designing sphere designing web-sites, skins, templates, logos designing, marketing material and application layouts',
            image:'uidesign.png',
            link:'portfolio',
            readMore: true
        },
        { 
            title:'Application Management & Support', 
            description:'Spraxa provides end-to-end application lifecycle management, including maintenance, new feature development, and support. We offer flexible pricing options and engagement models with managed services for a comprehensive solution.',
            image:'appmanagement.png',
            link:'appmanagement',
            readMore: true
        },
        { 
            title:'Platform Solutions', 
            description:'We offer WordPress and Joomla design, development, customization, and integration services. Additionally, we specialize in Microsoft SharePoint deployment, customization, and maintenance, as well as Microsoft SQL Server analysis, database design, optimization, and reporting services.',
            image:'cms.png',
            link:'platformsolutions',
            readMore: true
        },
        { 
            title:'Technology', 
            description:'Spraxa Solutions offers reliable IT solutions, deploying cutting-edge technology to provide effective strategies for clients. They understand the importance of technology in today\'s business world and strive for innovation in delivering quality services, specializing in mobile and web application development, big data, and open-source platforms.',
            image:'technology.png',
            link:'technology',
            readMore: true
        },
        { 
            title:'Big Data', 
            description:'InfodriveIndia offers market intelligence for export-import businesses, while Volza provides dashboards with shipment records for business planning. CoolR\'s technology uses machine learning to optimize sales efficiency with detailed analytics.',
            image:'bigdata.png',
            link:"bigdata",
            readMore: true
        },
        {
            title:'Application Development',
            description:'Mobile app development is the creation of apps for mobile devices like phones or PDAs. They can be pre-installed during manufacturing and are designed for various purposes.',
            image:'appdevelopment.png',
            link:'appdevelopment',
            readMore: true
        },
        {
            title:'Mobile App Development',
            description:'Spraxa specializes in Android, iOS, iPhone, iPad, and universal mobile app development. Their expertise extends to HTML5 mobile app development, leveraging the reach and impact of these platforms for businesses\' success.',
            image:'mobileapp.png',
            link:'mobileappdev',
            readMore: true
        },
        {
            title:'Artificial Intelligence',
            description:'Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.',
            image:'ai.png',
            link:"ai",
            readMore: false
        },
        {
            title:'Machine Learning',
            description:'Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.',
            image:'ml.png',
            link:'ml',
            readMore: false
        },
    ]
  return (
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:5, flexWrap:'wrap'}}>
        {
            Services.map((service,index) => (
                <VrCard
                    key={index}
                    width={350}
                    height={400}
                    image={service.image}
                    imgPath="services"
                    imgWidth={200}
                    imgHeight={150}
                    avatar={false}
                    title={service.name}
                    subtitle={service.title}
                    description={service.description}
                    readMore={service.readMore}
                    redirectTo={`/${service.link}`}
                    bgColor='#0fac7d'
                    color='white'
                />
            ))
        }
        </Box>
  )
}

export default Services