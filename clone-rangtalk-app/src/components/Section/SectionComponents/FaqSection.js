import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../../styles/font.css";
import FaqAccordian from "./FaqSectionComponents/FaqAccordian";
import PropTypes from "prop-types";

const FaqSection = () => {
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
          <FaqAccordian
            firstText="01. 통화 요금이 궁금합니다."
            secondText="학교랑톡 통화 요금은 아래와 같습니다. (VAT 포함)
ㅁ 이너텔 C-type형
시내 : 42.9원/3분
시외 : 42.9원3분(30km 미만), 15.95원/10초(30km 이상)
이동전화 : 15.95원/10초
ㅁ 기업인터넷전화 Centrex형

시내/시외 : 41.6원/3분(5년 약정시)
이동전화 : 13.6원/10초(5년 약정시)"
          ></FaqAccordian>
        </Paper>
      </Container>
    </Box>
  );
};

FaqAccordian.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
};

export default FaqSection;
