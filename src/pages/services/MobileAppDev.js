import { Box, Typography } from '@mui/material'
import React from 'react'
import { VrCard } from '../../components/Common/CustomCards'
import PortfolioCard from '../../components/Common/PortfolioCard'
import { CustomColor, SectionHeader } from '../../styles'
import NormalText from '../../components/Common/BodyContent'

const AppDevelopment = () => {
    const techs = [
        {
            name: 'Android Application Development',
            image:'microsoft.jpg',
            description:"Android has become such an important platform in the recent years that one cannot afford to ignore it. Being an open source OS created by Google, Android enjoys a lot of developer and community support. The reach of Android is tremendous and no matter where you go, you will find an Android phone in the hands of an individual. That creates a wonderful opportunity for you to leverage this platform to make an impact. And we know how to create that impact.",
        },
        {
            name: 'Android Tablet Application Development',
            image:'java.png',
            description:"Not only the mobile phones but the tablet market is also expanding enormously. This has to be taken into account and therefore one cannot restrict themselves only to the mobile phone market while ignoring the tablet market completely. That is the reason we suggest our clients to have the right Android application for tablets, which can serve its purpose through a differentiated market.",
        },
        {
            name: 'Ios Development',
            image:'codefile.png',
            description:"Both iPhone and iPad application is done on top of Objective C and is collectively called as iOS Application Development. Spraxa, as a premier iOS Application Development Company is committed to provide top quality iOS Applications. Our Expert team of iOS app Developers will help you through to fulfill your dream of a great iOS Application.",
        },
        {
            name: 'Iphone Application Development',
            image:'html5.png',
            description:"As a leading iPhone application development company, we have dedicated team of iPhone app developer and programmers who can build iPhone app according to your needs. Our expert team of iPhone App developers and mobile app developers offer 3+ years of varied experience in Apple iPhone development. Please fill the form on the right to contact us for hiring an iPhone developer or a team of iPhone developers.",
        },
        {
            name: 'iPad Application Development',
            image:'html5.png',
            description:"Owing to its similarity with the iPhone, the teams of iPad Development at Spraxa are well trained to develop custom iPad Tablet Application. The team is well acquainted with developing iPad applications utilizing the widescreen and other usability aspects of iPad. Kindly contact us to know more about it.",
        },
        {
            name: 'Universal Mobile App Development',
            image:'html5.png',
            description:"Mobile developers at Spraxa are expert at using mobile development frameworks such as jQuery Mobile, Sencha Touch etc coupled with Phonegap, Appcelerator Titanum etc for developing high end universal mobile applications. If you are looking for a mobile developer or a team of developers, we would like to help you and provide the top quality services that can deliver the top quality results to your business.",
        },
        {
            name: 'HTML5 Mobile Application Development',
            image:'html5.png',
            description:"Spraxa has been actively following the HTML5 development since its inception and have hands on experience build several universal mobile and web applications. HTML5 is the ubiquitous platform for the web. Whether you’re a mobile company, an enterprise with specific business needs, or a serious game development company looking to explore the web/mobile as a new platform, HTML5 has something for you! HTML5 provides a superior and cost effective method for driving the mobile and web strategy by paving way for universal mobile and web applications",
        }
    ]
    const Screenshots = [
        {
          title:'Coolr',
          image:'coolr.png'
        },
        {
          title:'Kundli',
          image:'kundli.png'
        },
        {
          title:'Orflow',
          image:'orflow.png'
        },
        {
          title:'Tailored Logistics',
          image:'tailored.png'
        },
        {
          title:'Volza',
          image:'volza.png'
        },
        {
            title:'Spraxa',
            image:'spraxa.png'
        }
      ]
  return (
    <Box>
        <Box sx={{display:'flex',flexDirection:'column', gap:0.5, ml:{xs:2, sm:5}, mt:0}}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <Typography sx={
                        {
                            ...SectionHeader,
                            textDecorationLine:'underline',
                            textDecorationThickness:5,
                            textDecorationColor: CustomColor.primary,
                        }
                        }>AP</Typography>
                    <Typography sx={SectionHeader}>PLICATION DEVELOPMENT</Typography>
                </Box>
                <NormalText text="Mobile app development is the act or process by which a mobile app is developed for mobile devices, 
            such as personal digital assistants, enterprise digital assistants or mobile phones. 
            These applications can be pre-installed on phones during manufacturing."/>
            </Box>
        <Box sx={{display:'flex', flexWrap:'wrap', alignItems:'center',justifyContent:"center"}}>
            {
                techs.map((tech,index)=>(
                    <VrCard
                        width={500}
                        height={400}
                        title={tech.name}
                        image={tech.image}
                        imgWidth={100}
                        imgHeight={100}
                        imgPath='services/service'
                        description={tech.description}
                        avatar={false}
                        readMore={false}
                        bgColor='#50d8af'
                        color='white'
                    />
                ))
            }
        </Box>
        <Typography>SCREENSHOTS</Typography>
        <Typography>
            View Screenshots of the app we designed.
        </Typography>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:'center', flexWrap:'wrap', gap:5}}>
            {
                Screenshots.map((screenshot, index) => (
                    <PortfolioCard key={index} image={screenshot.image} imagePath='portfolio/mobile' title={screenshot.title}/>
                ))
            }
        </Box>
    </Box>
  )
}

export default AppDevelopment