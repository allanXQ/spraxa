import React from 'react'
import Header from '../components/Header'
import { VrCard } from '../components/Common/CustomCards'
import { Box } from '@mui/material'

const Services = () => {
    const Services = [
        { 
            title:'Mobile App Development', 
            description:'The popularity of mobile applications has risen tremendously. With the proliferation of high speed networks, smart phones and coupled with the fact that information',
            image:'mobileapp.jpg',
            readMore: true
        },
        { 
            title:'Web & (UI/UX) Design', 
            description:'In July, 2007, Spraxa Solutions expanded into web-designing sphere designing web-sites, skins, templates, logos designing, marketing material and application layouts',
            image:'uidesign.png',
            readMore: true
        },
        { 
            title:'Application Management & Support', 
            description:'Spraxa Solutions offers comprehensive application lifecycle management services that include maintenance',
            image:'appmanagement.png',
            readMore: true
        },
        { 
            title:'Platform Solutions', 
            description:'WordPress base design, development and customization Joomla based design, development, customization and integration',
            image:'cms.png',
            readMore: true
        },
        { 
            title:'Technology', 
            description:'WordPress base design, development and customization Joomla based design, development, customization and integration',
            image:'technology.png',
            readMore: true
        },
        { 
            title:'Big Data', 
            description:'WordPress base design, development and customization Joomla based design, development, customization and integration',
            image:'bigdata.png',
            readMore: true
        },
        {
            title:'Application Development',
            description:'Spraxa Solutions offers comprehensive application lifecycle management services that include maintenance, support, re-engineering and testing. Our deep expertise in application development and maintenance enables us to deliver high quality results at a reduced cost. We follow a well-defined and scalable application development process that comprises the following steps:',
            image:'appdevelopment.png',
            readMore: true
        },
        {
            title:'Mobile App Development',
            description:'The popularity of mobile applications has risen tremendously. With the proliferation of high speed networks, smart phones and coupled with the fact that information is available at the fingertips, mobile applications have become a necessity rather than a luxury. Spraxa Solutions has been at the forefront of mobile application development. We have developed mobile applications for various platforms including iPhone, Android, Blackberry and Windows Mobile. Our mobile application development team comprises of highly skilled and experienced professionals who have delivered various mobile applications for our clients. We have developed mobile applications for various domains including:',
            image:'mobileapp.jpg',
            readMore: true
        },
        {
            title:'Artificial Intelligence',
            description:'Artificial Intelligence (AI) is the ability of a computer or a robot controlled by a computer to do tasks that are usually done by humans because they require human intelligence and discernment. AI is a branch of computer science that deals with intelligent behavior, learning, and adaptation in machines. AI is being used in a wide range of fields including medical diagnosis, stock trading, robot control, law, remote sensing, scientific discovery and toys. AI is also used in video games and also in military projects. AI is achieved by studying how human brain thinks, and how humans learn, decide, and work while trying to solve a problem, and then using the outcomes of this study as a basis of developing intelligent software and systems.',
            image:'ai.png',
            readMore: false
        },
        {
            title:'Machine Learning',
            description:'Machine learning is a field of computer science that gives computers the ability to learn without being explicitly programmed. Machine learning is closely related to (and often overlaps with) computational statistics, which also focuses in prediction-making through the use of computers. It has strong ties to mathematical optimization, which delivers methods, theory and application domains to the field. Machine learning is employed in a range of computing tasks where designing and programming explicit algorithms with good performance is difficult or infeasible; example applications include email filtering, detection of network intruders or malicious insiders working towards a data breach, optical character recognition (OCR), learning to rank, and computer vision.',
            image:'ml.png',
            readMore: false
        },
    ]
  return (
    <>
        <Header/>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:5, flexWrap:'wrap'}}>
        {
            Services.map((service,index) => (
                <VrCard
                    key={index}
                    width={300}
                    height={400}
                    image={service.image}
                    imgPath="services"
                    imgWidth={200}
                    imgHeight={200}
                    avatar={false}
                    title={service.name}
                    subtitle={service.title}
                    description={service.description}
                    readMore={service.readMore}
                    redirectTo="/home"
                />
            ))
        }
        </Box>

    </>
  )
}

export default Services