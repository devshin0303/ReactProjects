import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../../styles/font.css";
import MainButton from "../../Header/HeaderComponents/MainButton";
import DownloadBtn from "./DownloadBtn";

const Section5TopButton = styled(MainButton)({
  backgroundColor: "red",
});

const Section5 = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("img/img_bottom_phone/img_bottom_phone_02@2x.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 1000,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "flex-start" }}
      >
        <Box pt={13} width="600px" height="auto">
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Section5TopButton>아이랑톡</Section5TopButton>
            <MainButton>쌤이랑톡</MainButton>
            <MainButton>학교랑톡</MainButton>
          </Box>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            pt={2}
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
          <DownloadBtn appMarket="google"></DownloadBtn>
          <DownloadBtn appMarket="IOS"></DownloadBtn>

          {/* <Button variant="contained">온라인 청약</Button> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Section5;
