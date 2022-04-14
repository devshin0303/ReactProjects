import { CardMedia, Container, useMediaQuery } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { Box } from "@mui/system";
import React from "react";

const YoutubePlayerSection = () => {
  const matches = useMediaQuery("(min-width:600px)");

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
          allowFullScreen="allowfullscreen"
          sx={
            matches
              ? { width: "1120px", height: "675px" }
              : { widht: "500px", height: "300px" }
          }
        ></CardMedia>
      </Container>
    </Box>
  );
};

export default YoutubePlayerSection;
