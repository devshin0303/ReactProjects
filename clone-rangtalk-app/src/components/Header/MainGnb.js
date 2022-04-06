import {
  Box,
  Button,
  CardMedia,
  Container,
  Hidden,
  Toolbar,
} from "@mui/material";
import React from "react";
import MainButton from "./MainButton";
import "../../styles/font.css";
import styled from "@emotion/styled";

// @MainGnb : header 상단 네비게이션 bar

const MainGnb = () => {
  return (
    <Toolbar sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          m={0}
          justifyContent="space-between"
          boxSizing="border-box"
        >
          {/*main logo image box */}
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <CardMedia
              component="img"
              height="22"
              image="img/img_fulllogo_big/img_fulllogo_big@2x.png"
              alt="logoImg"
            ></CardMedia>
          </Box>

          {/* Hidden component를 사용하여 상단 navigation bar를 md 사이즈 이하일 때 visible : none 처리 */}
          <Hidden mdDown>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={1}
            >
              <Box>
                <MainButton>랑톡소개</MainButton>
                <MainButton>FAQ</MainButton>
                <MainButton>다운로드</MainButton>
                <MainButton>문의접수</MainButton>
              </Box>
              <Box marginLeft="40px">
                <Button
                  variant="contained"
                  component="span"
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(113, 165, 217, 0.7)",
                    },
                    textAlign: "center",
                    width: "100px",
                    bgcolor: "#71a5d9",
                    fontWeight: "bold",
                    fontFamily: "Noto Sans KR",
                  }}
                >
                  로그인
                </Button>
              </Box>
            </Box>
          </Hidden>
        </Box>
      </Container>
    </Toolbar>
  );
};

export default MainGnb;
