import { Container, TextField, Typography, useMediaQuery } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import React from "react";
import "../../../styles/font.css";

const ContactSection = () => {
  const matches = useMediaQuery("(min-width:600px)");

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
          sx={matches ? { fontSize: "20px" } : { fontSize: "16px" }}
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
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h2"
            fontWeight="bold"
            fontFamily="Noto Sans KR"
            component="div"
            sx={matches ? { fontSize: "60px" } : { fontSize: "32px" }}
          >
            CONTACT US
          </Typography>
          <Box>
            <TextField
              id="standard-basic"
              label="성함"
              varient="standard"
              size="small"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
