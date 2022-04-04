import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Section = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("img/img_back/img_back@2x.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: 1000,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "flex-start" }}
      >
        하이
      </Container>
    </Box>
  );
};

export default Section;
