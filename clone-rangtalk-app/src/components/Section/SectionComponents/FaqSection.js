import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../../styles/font.css";
import { FaqAccordion } from "./FaqSectionComponents/FaqAccordion";
import PropTypes from "prop-types";

const FaqSection = ({ plusImg, mainColor }) => {
  return (
    <Box
      id="faqSection"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={17}
      pb={17}
      bgcolor="#e1e7ea"
    >
      <Container maxWidth="lg" sx={{ height: "auto" }}>
        <Typography
          variant="h5"
          fontFamily="Noto Sans KR"
          fontWeight="400"
          fontSize="20px"
        >
          랑톡의 FAQ
        </Typography>
        <Typography
          variant="h1"
          fontFamily="Noto Sans KR"
          fontWeight={400}
          fontSize="56px"
        >
          자주묻는 <b>질문</b>
        </Typography>
        <Paper
          elevation={0}
          variant="outlined"
          sx={{
            mt: "38px",
            overflow: "scroll",
            height: "680px",
          }}
        >
          <FaqAccordion plusImg={plusImg} mainColor={mainColor} />
        </Paper>
      </Container>
    </Box>
  );
};

FaqAccordion.propTypes = {
  PlusImg: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
};

export default FaqSection;
