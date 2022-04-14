import { Button, Container, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../../styles/font.css";
import { Link } from "react-scroll";

const MainTopSection = ({ backMainImg, backMainMobileImg, talkName }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={
        matches
          ? {
              backgroundImage: `url(${backMainImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              height: 1000,
            }
          : {
              backgroundImage: `url(${backMainMobileImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              height: "100vh",
            }
      }
    >
      <Container
        maxWidth="lg"
        sx={
          matches
            ? { display: "flex", justifyContent: "flex-start", width: "100%" }
            : {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                width: "100%",
              }
        }
      >
        <Box pt={22} width="600px" height="auto">
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            m={0}
            color="white"
            fontFamily="Noto Sans KR"
            sx={
              matches
                ? { fontSize: "40PX" }
                : {
                    fontSize: "20px",
                    fontWweight: 400,
                    lineHeight: 1.167,
                  }
            }
          >
            쌤이<b>랑</b>, 학부모<b>랑</b>, 아이<b>랑</b>,
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            component="div"
            m={0}
            color="white"
            mt={1}
            mb={1}
            sx={
              matches
                ? { fontSize: "90px", fontWeight: "bold" }
                : {
                    fontSize: "60px",
                    fontWeight: "bold",
                    lineHeight: 1.167,
                  }
            }
            fontFamily="NanumSquareRound"
          >
            랑톡
          </Typography>
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
            sx={
              matches
                ? { fontSize: "20px" }
                : {
                    fontSize: "14px",
                    lineHeight: 1.167,
                    color: "#fff",
                  }
            }
          >
            <strong>
              랑톡(Rangtalk)은 학교 유선 전화를 개인 스마트폰에서 사용할 수 있는
              <br />
              교원안심번호 소통서비스 앱
            </strong>
            입니다. <br />
            시간과 장소의 제약이 없어 업무 효율성을 높여주고, <br />
            선생님과 학부모, 학생간의 양방향 소통을 가능하게 해줍니다.
          </Typography>
          <Link to="downloadSection" spy={true} smooth={true}>
            <Button
              variant="contained"
              sx={
                matches
                  ? {
                      "&:hover": {
                        boxShadow: "0 3px 2px 2px rgb(0 0 0 / 20%)",
                        backgroundColor: "#fff",
                      },
                      width: "180px",
                      height: "60px",
                      bgcolor: "#fff",
                      color: "black",
                      fontWeight: "bold",
                      mt: "50px",
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                    }
                  : {
                      "&:hover": {
                        boxShadow: "0 3px 2px 2px rgb(0 0 0 / 20%)",
                        backgroundColor: "#fff",
                      },
                      width: "100px",
                      height: "48px",
                      bgcolor: "#fff",
                      color: "black",
                      fontWeight: "bold",
                      mt: "50px",
                      mb: "20vh",
                      fontFamily: "Noto Sans KR",
                      fontSize: "16px",
                    }
              }
            >
              다운로드
            </Button>
          </Link>
          {/* <Button variant="contained">온라인 청약</Button> */}
        </Box>
      </Container>
    </Box>
  );
};

export default MainTopSection;
