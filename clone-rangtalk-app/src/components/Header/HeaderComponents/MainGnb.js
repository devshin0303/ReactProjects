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
import "../../../styles/font.css";
import { Link } from "react-scroll";
import { PropTypes } from "prop-types";

// @MainGnb : header 상단 네비게이션 bar

const MainGnb = ({ mainLogoImg, loginBtnColor }) => {
  return (
    <Toolbar sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }} id="mainTop">
      <Container maxWidth="lg">
        <Box
          display="flex"
          m={0}
          justifyContent="space-between"
          boxSizing="border-box"
        >
          {/*main logo image box */}
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Link to="mainTop" spy={true} smooth={true}>
              <CardMedia
                component="img"
                height="22"
                image={mainLogoImg}
                alt="logoImg"
              ></CardMedia>
            </Link>
          </Box>

          {/* Hidden component를 사용하여 상단 navigation bar를 md 사이즈 이하일 때 visible : none 처리 */}
          <Hidden smDown>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={1}
            >
              <Box>
                <Link to="introSection" spy={true} smooth={true}>
                  <MainButton>랑톡소개</MainButton>
                </Link>
                <Link to="faqSection" spy={true} smooth={true}>
                  <MainButton>FAQ</MainButton>
                </Link>
                <Link to="downloadSection" spy={true} smooth={true}>
                  <MainButton>다운로드</MainButton>
                </Link>
                <Link to="supportSection" spy={true} smooth={true}>
                  <MainButton>문의접수</MainButton>
                </Link>
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
                    backgroundColor: loginBtnColor,
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

MainGnb.propTypes = {
  mainLogoImg: PropTypes.string.isRequired,
  loginBtnColor: PropTypes.string.isRequired,
};

export default MainGnb;
