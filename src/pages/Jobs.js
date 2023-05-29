import { Box, Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Header from '../components/Header';

const Jobs = () => {
    const jobs = [
        {
            title:'ReactJS / NodeJS / React Native Engineers',
            requirements: '3+ years Experience',
            location: ' 201, 2nd floor 45 Bansal Chambers Kaushambi Ghaziabad - (U.P) 201010',
            wWFO:true
        },
        {
            title: "Computer Vision / Machine Learning (ML) / Artificial Intelligence (AI) Engineers",
            requirements: '3+ years Experience',
            location:'',
            WFO:true
        },
        {
            title: "Quality Analyst",
            requirements: '3+ years Experience',
            location:'',
            WFO:true
        },
        {
            title: ".NET and SQL Engineers",
            requirements: '2+ years Experience',
            location:'',
            WFO:true
        },
        {
            title: "React Native Engineers",
            requirements: '2+ years Experience',
            location:'',
            WFO:true
        },
        {
            title: "Angular(version 14 & above) Engineers",
            requirements: '2+ years Experience',
            location:'',
            WFO:true
        },
        {
            title: "Technology freshers",
            requirements: 'Good IQ, basics of HTML, CSS, Javascript. Self learn React and Node and be a party of this dynamic team',
            location:'',
            WFO:true
        }

    ]
  return (
    <>
        <Header/>
        <Grid container style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        {/* <Typography variant="h4">Jobs</Typography> */}
        <Grid item style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', width:'100%'}}>
            {
                jobs.map((job, index) => {
                    return (
                        <Card key={index} style={{ backgroundColor:'whitesmoke', display:'flex', flexDirection:'column', gap:20, padding:10, margin:10, width:'80%'}}>
                            <Box style={{display:'flex', gap:4, alignItems:'center'}}> 
                                <Typography variant="h5">{job.title}</Typography>
                                {job.WFO ?
                                    <Box style={{display:'flex',alignItems:'center', justifyContent:'center',borderRadius:5, backgroundColor:'blue',color:'white',height:'25px', width:'50px'}}>
                                        <Typography variant="subtitle2">WFO</Typography>
                                    </Box>
                                    : ''
                                }
                            </Box>
                            <Box sx={{display:'flex', flexDirection: { xs: 'column', md: 'row' },

                             justifyContent:'space-between'}}>
                                <Box sx={{display:'flex', gap:2}}>
                                    <WorkHistoryIcon />
                                    <Typography variant="body1">{job.requirements}</Typography>
                                </Box>
                                <Box sx={{display:'flex', gap:2}}>
                                    <PlaceIcon />
                                    <Typography variant="body1">{job.location}</Typography>
                                </Box>
                            </Box>
                        </Card>
                    )
                }
                )
            }
        </Grid>
        <Grid item>
            <Button variant='contained'>Browse More Jobs</Button>
        </Grid>
        <Grid item>
            <Typography variant="h5">Send your resume to <a href="mailto:careers@spraxa.com">careers@spraxa.com</a></Typography>
        </Grid>
    </Grid>
    </>
   
  )
}

export default Jobs