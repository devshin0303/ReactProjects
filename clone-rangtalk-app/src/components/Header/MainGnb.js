import { Box, Button, CardMedia, Container, Toolbar } from "@mui/material";
import React from "react";
import MainButton from "./MainButton";

const MainGnb = () => {
  return (
    <Toolbar sx={{ borderBottom: 1 }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          m={0}
          justifyContent="space-between"
          boxSizing="border-box"
        >
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <CardMedia
              component="img"
              height="22"
              image="img/img_fulllogo_big.svg"
              alt="logoImg"
            ></CardMedia>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" p={1}>
            <MainButton>랑톡소개</MainButton>
            <MainButton>FAQ</MainButton>
            <MainButton>다운로드</MainButton>
            <MainButton>문의접수</MainButton>
            <Box marginLeft="40px">
              <Button
                variant="contained"
                component="span"
                sx={{
                  textAlign: "center",
                  width: "100px",
                  margin: "0 16px",
                  bgcolor: "#71a5d9",
                  fontWeight: "bold",
                }}
              >
                로그인
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Toolbar>
  );
};

export default MainGnb;
