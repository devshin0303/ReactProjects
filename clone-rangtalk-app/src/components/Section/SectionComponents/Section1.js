import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../../styles/font.css";
import { Link } from "react-scroll";

const Section1 = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("img/img_back/img_back@2x.jpg")',
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
        <Box pt={22} width="600px" height="auto">
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            m={0}
            color="white"
            fontFamily="Noto Sans KR"
            fontSize="40px"
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
            sx={{ fontSize: "90px", fontWeight: "bold" }}
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
            sx={{ color: "#3e3e3e" }}
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
              sx={{
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
              }}
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

export default Section1;
