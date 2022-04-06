import { CardMedia, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Section2 = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={15}
      pb={15}
      bgcolor="#e9eff6"
    >
      <Container maxWidth="lg">
        <CardMedia
          component="iframe"
          src="https://www.youtube.com/embed/K8qE0Ved5ZI"
          title="YouTube video player"
          frameBorder="0"
          width="1116"
          height="599"
        ></CardMedia>
      </Container>
    </Box>
  );
};

export default Section2;
