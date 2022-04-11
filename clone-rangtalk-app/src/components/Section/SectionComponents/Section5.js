import { Button, CardMedia, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../../styles/font.css";
import DownloadBtn from "./DownloadBtn";
import Section5TopBtn from "./Section5TopBtn";
import PropTypes from "prop-types";

const Section5 = () => {
  return (
    <Box
      id="downloadSection"
      sx={{
        backgroundImage:
          'url("img/img_bottom_phone/img_bottom_phone_02@2x.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 1000,
        backgroundColor: "#f2f2f2",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "flex-start" }}
      >
        <Box
          pt={16}
          width="600px"
          height="auto"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mb={15}
          >
            <Section5TopBtn btnName="아이랑톡"></Section5TopBtn>
            <Section5TopBtn btnName="쌤이랑톡"></Section5TopBtn>
            <Section5TopBtn btnName="학교랑톡"></Section5TopBtn>
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            c
          >
            <Typography
              fontFamily="Noto Sans KR"
              noWrap={true}
              fontSize="56px"
              color="rgb(94, 151, 208)"
              fontWeight="bold"
            >
              쌤이랑톡
            </Typography>
            <Box>
              <CardMedia
                component="img"
                height="51px"
                width="50px"
                image="img/img_bottom_logo/img_bottom_logo_2@2x.png"
                alt="logoImg"
              ></CardMedia>
            </Box>
          </Box>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            pb={2}
            m={0}
            fontFamily="Noto Sans KR"
            noWrap={true}
            fontSize="20px"
          >
            학교와 선생님을 위한 양방향 소통앱
            <br />
            쌤이랑톡입니다.
          </Typography>
          <Box mt="32px">
            <Button
              variant="contained"
              component="span"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(113, 165, 217, 0.7)",
                },
                textAlign: "center",
                width: "100%",
                bgcolor: "#71a5d9",
                fontWeight: "bold",
                fontFamily: "Noto Sans KR",
                fontSize: "18px",
                marginBottom: 2,
              }}
            >
              쌤이랑톡매뉴얼
            </Button>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <DownloadBtn appMarket="img/img_btn_logo_google/img_google.png"></DownloadBtn>
              <DownloadBtn appMarket="img/img_btn_logo_apple/img_apple.png"></DownloadBtn>
            </Box>
            <Box>
              <Typography
                variant="body1"
                gutterBottom
                component="div"
                pb={2}
                mt={3}
                fontFamily="Noto Sans KR"
                color="#404040"
                noWrap={true}
                fontSize="14px"
                lineHeight="24px"
              >
                * iOS앱은 ‘설정>일반>기기 관리 (또는 프로파일 및 기기 관리) >
                <br />
                Helixtech Corp. 에서 ‘신뢰함>신뢰’ 버튼을 꼭 확인해주셔야 어플이
                <br />
                정상적으로 실행됩니다.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

Section5TopBtn.propTypes = {
  btnName: PropTypes.string.isRequired,
};

DownloadBtn.propTypes = {
  appMarket: PropTypes.string.isRequired,
};

export default Section5;
