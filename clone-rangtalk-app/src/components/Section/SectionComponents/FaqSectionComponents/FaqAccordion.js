import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import "../../../../styles/font.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FaqAccordion = ({ plusImg, mainColor, minusImg }) => {
  const matches = useMediaQuery("(min-width:600px)");

  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <Accordion
      onClick={onClick}
      sx={{ boxShadow: "none", borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
    >
      <AccordionSummary
        expandIcon={
          // <ExpandMoreIcon>
          <CardMedia
            component="img"
            image={open ? minusImg : plusImg}
            alt="logoImg"
            sx={{ width: "auto" }}
          />
          // </ExpandMoreIcon>
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={
          matches
            ? {
                height: "64px",
                padding: "18px 0",
                flexDirection: "row-reverse",
              }
            : {
                height: "64px",
                padding: "18px 0",
                flexDirection: "row",
              }
        }
      >
        <Typography
          sx={{ fontFamily: "Noto Sans KR", fontSize: "18px", marginLeft: 3 }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: "Noto Sans KR",
              fontSize: "18px",
              color: mainColor,
            }}
          >
            01.
          </Typography>{" "}
          통화 요금이 궁금합니다.
        </Typography>
      </AccordionSummary>
      <AccordionDetails expandIcon={<ExpandMoreIcon sx={{ marginRight: 4 }} />}>
        <Typography
          component="pre"
          variant="body1"
          padding="20px 0"
          fontFamily="Noto Sans KR"
          color="#4a4a4a"
          fontSize="14px"
          sx={{ padding: "18px" }}
        >
          학교랑톡 통화 요금은 아래와 같습니다. (VAT 포함)
          <br />
          ㅁ 이너텔 C-type형
          <br />
          시내 : 42.9원/3분
          <br />
          시외 : 42.9원3분(30km 미만), 15.95원/10초(30km 이상)
          <br />
          이동전화 : 15.95원/10초
          <br />
          ㅁ 기업인터넷전화 Centrex형
          <br />
          시내/시외 : 41.6원/3분(5년 약정시)
          <br />
          이동전화 : 13.6원/10초(5년 약정시)
          <br />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
