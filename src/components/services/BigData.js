import { Box, Typography } from "@mui/material";
import React from "react";
import { HorizontalCard } from "../../components/Common/Cards/Horizontal";

const BigData = () => {
  const projects = [
    {
      name: "Infodrive",
      image: "infodrive.jpg",
      description:
        "InfodriveIndia is a pioneer & market leader in competitive export import market Intelligence from over 80+ countries .We specialize in answering the most difficult questions facing your business through market research reports. Reports and Information is widely used by leading companies, industry associations, councils and is also cited in court of law.",
    },
    {
      name: "Volza",
      image: "volza.jpg",
      description: {
        "": "Volza helps you plan business growth with easy, simple and quick dashboards to discover actual buyers, supplier, monitor competition, prices, quantity based on actual shipment records with bill of entry and shipping bills filed at over 78+ countries customs.",
        "Grow Your Business!":
          "Actionable insights not just junk data. Access over 30 super hot dashboards with Ideal Buyer report, Ideal Supplier Report, Ideal Price, Buyer-Supplier Relationship Analysis, Market Share Report, Price Trend, Volume Trends, 80-20 Rules and many more.",
        "Volza Reduces Tasks Of Weeks To Seconds":
          "Search & instant view of “Ready to Use” Dashboards designed by experts to drive Export-Import Business Growth!",
        "Live Screen Support":
          "Get instant and On Screen assistance on your workspace from an expert Business Analyst. Watch your Dashboards and Searches configured and corrected in seconds right in front of you.",
      },
    },
    {
      name: "CoolR",
      image: "coolr.jpg",
      description:
        "What actions should you take to maximize sales? Do those actions differ by store location? What are the most important KPIs for driving sales? Does cooler placement in a store impact your sales profits? With CoolR technology, you'll be able to answer these questions and more. Our proprietary machine learning platform tracks it all, providing you with the facts and figures you need to optimize efficiency and sales growth. We don't just provide you with the numbers, we give you the analytics: descriptive, predictive, and prescriptive.",
    },
  ];
  return (
    <Box
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        sx={{
          color: "secondary.main",
          fontSize: "3rem",
          fontWeight: "bold",
          display: "flex",
          alignSelf: "center",
        }}
      >
        BIG DATA
      </Typography>
      <Box>
        {projects.map((project, index) => (
          <HorizontalCard
            width={1250}
            height="auto"
            title={project.name}
            image={project.image}
            imgWidth="100%"
            imgHeight="auto"
            imgPath="services/service"
            description={project.description}
            hideKey={true}
            reverse={index % 2 !== 0}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BigData;
