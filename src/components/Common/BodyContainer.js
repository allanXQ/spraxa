import { Box, styled } from "@mui/material";

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  [theme.breakpoints.down("md")]: {
    marginTop: 20,
  },
}));

const BodyContainer = ({ children }) => {
  return <Root>{children}</Root>;
};

export default BodyContainer;
