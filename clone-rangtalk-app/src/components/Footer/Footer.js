import { CardMedia, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../styles/font.css";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          color: "white",
          backgroundColor: "#252525",
          padding: "30px 0 45px 0",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Box>
            <CardMedia
              component="img"
              image="img/img_logo_footer/logo.png"
              alt="logoImg"
              sx={{ width: "100px" }}
            ></CardMedia>

            <Typography
              fontFamily="Noto Sans KR"
              component="p"
              noWrap={true}
              fontSize="12px"
              color="#3e3e3e"
              fontWeight="400"
              lineHeight="18px"
            >
              대표 박성빈 | (06776) 서울시 서초구 마방로6길 17, 4~5층
              <br />
              전화 02-733-5959 ~ 5960 | FAX 02-733-7198 | ktbizmobile@kt.com
              <br />@ 2020 Helixtech Corp. All Rights Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
