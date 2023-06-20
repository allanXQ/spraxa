import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Technology = () => {
    const imagePath='images/technologies'
    const Technologies = [
        {
            name:'Technology Overview',
            image:'technologies-overview.png', 
            link:"technology", 
            description:"Spraxa Solutions specializes in deploying cutting-edge IT solutions for effective client strategies. With a focus on innovation, Spraxa leverages key technologies to deliver quality software solutions for mobile, web, desktop, and big data applications. They also utilize open Stack, Java, Opensource/PHP, and Microsoft Application Development platforms.",
            readMore:true
        },
        {
            name:'Mobile Application Development',
            image:'web_development.png', 
            link:"mobileappdev", 
            description:"Spraxa Solutions – with its reliable expertise in the Information Technology solutions, deploys cutting edge technology, in order to provide the most effective solutions to the clients. The key to any business solution is to understand the strategy.",
            readMore:true
        },
        {
            name:'Application Development',
            image:'app_development.png',
            link:"appdevelopment",
            description:"Spraxa Solutions – with its reliable expertise in the Information Technology solutions, deploys cutting edge technology, in order to provide the most effective solutions to the clients. The key to any business solution is to understand the strategy.",
            readMore:true
        },
        {
            name:'Big Data',
            image:'big_data.png',
            link:"bigdata",
            description:"Spraxa Solutions – with its reliable expertise in the Information Technology solutions, deploys cutting edge technology, in order to provide the most effective solutions to the clients. The key to any business solution is to understand the strategy.",
            readMore:true
        },
    ]
  return (
    <Box>
        <Typography variant="h4">Technologies</Typography>
        <Box style={{
            display:'flex', 
            flexDirection:"row", 
            alignItems:"center", 
            justifyContent:"center",
            flexWrap:"wrap",
            gap:"20px"
            }}>
            {
                Technologies.map((tech, index)=>(
                    <Box class="flip-card">
                        <Box class="flip-card-inner">
                            <Box class="flip-card-front">
                                <img src={`${imagePath}/${tech.image}`} alt="Avatar" style={{width:'500px'}}/>
                            </Box>
                            <Box class="flip-card-back">
                                <Typography variant="h5">{tech.name}</Typography>
                                <Typography>{tech.description}</Typography>
                                <Typography style={{color:'white'}}>
                                    <Link to={`/${tech.link}`} style={{color:'white'}}>Read More...</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                ))
            }            
        </Box>
    </Box>
  )
}

export default Technology






