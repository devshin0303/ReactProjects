import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../../styles/font.css";

const Section6 = () => {
  return (
    <Box
      id="supportSection"
      sx={{
        backgroundColor: "#ffffff",
        pt: 10,
        pb: 10,
        width: "100%",
        height: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontSize="20px"
          fontWeight="500"
          fontFamily="Noto Sans KR"
        >
          랑톡에 대해
          <Typography
            variant="span"
            color="rgb(113, 165, 217)"
            fontWeight="bold"
            fontFamily="Noto Sans KR"
          >
            궁금한점
          </Typography>
          이 있으신가요?
        </Typography>
        <Typography variant="h2" fontWeight="bold" fontFamily="Noto Sans KR">
          CONTACT US
        </Typography>
      </Container>
    </Box>
  );
};

export default Section6;
