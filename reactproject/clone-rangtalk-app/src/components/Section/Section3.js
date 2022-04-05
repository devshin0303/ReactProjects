import { Box, CardMedia, Container } from "@mui/material";
import React from "react";

const Section3 = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={12}
      pb={18}
      bgcolor="##f3f5f8"
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <CardMedia
            component="img"
            image="img/img_mockup_teacher/img_mockup_teacher@2x.jpg"
            height="30"
          />

          <Box></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section3;
