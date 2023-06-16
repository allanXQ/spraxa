import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { styled } from "styled-components";

const JobCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "space-evenly",
  gap: 20,
  padding: 10,
  margin: 10,
  width: "90%",
  height: "18vh",
  border: "2px solid #e6ebec",
}));

const Jobs = () => {
  const jobs = [
    {
      title: "ReactJS / NodeJS / React Native Engineers",
      requirements: "3+ years Experience",
      location:
        " 201, 2nd floor 45 Bansal Chambers Kaushambi Ghaziabad - (U.P) 201010",
      wWFO: true,
    },
    {
      title:
        "Computer Vision / Machine Learning (ML) / Artificial Intelligence (AI) Engineers",
      requirements: "3+ years Experience",
      location: "",
      WFO: true,
    },
    {
      title: "Quality Analyst",
      requirements: "3+ years Experience",
      location: "",
      WFO: true,
    },
    {
      title: ".NET and SQL Engineers",
      requirements: "2+ years Experience",
      location: "",
      WFO: true,
    },
    {
      title: "React Native Engineers",
      requirements: "2+ years Experience",
      location: "",
      WFO: true,
    },
    {
      title: "Angular(version 14 & above) Engineers",
      requirements: "2+ years Experience",
      location: "",
      WFO: true,
    },
    {
      title: "Technology freshers",
      requirements:
        "Good IQ, basics of HTML, CSS, Javascript. Self learn React and Node and be a party of this dynamic team",
      location: "",
      WFO: true,
    },
  ];
  const icon = {
    color: "secondary.icon",
  };
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {jobs.map((job, index) => {
          return (
            <JobCard key={index} style={{ boxShadow: "5px 10px #e6ebec" }}>
              <Box style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <Typography variant="h5">{job.title}</Typography>
                {job.WFO ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 1,
                      backgroundColor: "wfo.main",
                      color: "white",
                      height: "25px",
                      width: "50px",
                    }}
                  >
                    <Typography variant="subtitle2">WFO</Typography>
                  </Box>
                ) : (
                  ""
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },

                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <WorkHistoryIcon sx={icon} />
                  <Typography variant="body1">{job.requirements}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <PlaceIcon sx={icon} />
                  <Typography variant="body1">{job.location}</Typography>
                </Box>
              </Box>
            </JobCard>
          );
        })}
      </Box>
      <Box item>
        <Button
          variant="contained"
          sx={{ width: 180, height: 50, color: "white" }}
        >
          Browse More Jobs
        </Button>
      </Box>
      <Box item>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          Send your resume to{" "}
          <a href="mailto:careers@spraxa.com" style={{ fontSize: "16px" }}>
            careers@spraxa.com
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Jobs;
