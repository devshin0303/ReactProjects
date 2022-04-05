import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const Section3 = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={9}
      pb={18}
      bgcolor="rgba(243, 245, 248, 0.1)"
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
          height="auto"
        >
          <Box>
            <CardMedia
              component="img"
              image="img/img_mockup_teacher/img_mockup_teacher.jpg"
            />
          </Box>
          <Box width="440px" maxWidth="100%">
            <Typography
              variant="h5"
              gutterBottom
              fontSize="1.25rem"
              lineHeight="0.88"
              component="div"
              m={0}
              color="Black"
              bgcolor="rgba(113, 193, 217, 0.2);"
            >
              학생과 학부모를 위한
            </Typography>
            <Typography
              variant="h2"
              gutterBottom
              component="div"
              mb={10}
              color="#71a5d9"
              fontWeight="bold"
            >
              쌤이랑톡
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              pt={2}
              pb={2}
              m={0}
              color="balck"
              noWrap="true"
            >
              학교 선생님 전용 번호를 쉽게 알 수 있고,
              <br /> 실시간으로 학교 소식을 받아볼 수 있습니다.
              <br /> 1:1 게시판을 통해 선생님과 비밀 상담도 가능합니다.
              <br /> 이외에도 학부모, 학생의 편의를 위한 다양한
              <br />
              부가서비스를 추가할 예정입니다.
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          height="auto"
        >
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
          >
            <CardMedia
              component="img"
              image="img/img_sub_04.svg"
              sx={{ width: "120px", height: "120px", marginRight: "12px" }}
            />
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              mb={0}
              fontSize="16px"
              fontWeight="bold"
              color="rgba(0, 0, 0, 0.87)"
            >
              실시간 알림
            </Typography>
          </Box>
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
          >
            <CardMedia
              component="img"
              image="img/img_sub_05.svg"
              sx={{ width: "120px", height: "120px", marginRight: "12px" }}
            />
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              mb={0}
              fontSize="16px"
              fontWeight="bold"
              color="rgba(0, 0, 0, 0.87)"
            >
              편리한 소통
            </Typography>
          </Box>
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
          >
            <CardMedia
              component="img"
              image="img/img_sub_06.svg"
              sx={{ width: "120px", height: "120px", marginRight: "12px" }}
            />
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              mb={0}
              fontSize="16px"
              fontWeight="bold"
              color="rgba(0, 0, 0, 0.87)"
            >
              긴급알림
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section3;
