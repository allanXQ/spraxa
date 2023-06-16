import { Box } from "@mui/material";

const BodyContainer = ({ children }) => {
  return (
    <Box
      sx={{
        mt: 0,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      {children}
    </Box>
  );
};

export default BodyContainer;
