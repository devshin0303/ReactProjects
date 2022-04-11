import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import "../../../styles/font.css";

const Section3 = () => {
  return (
    <Box
      id="introSection"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={9}
      pb={25}
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
          <Box width="440px" maxWidth="100%" mr="-40px">
            <Typography
              variant="h5"
              gutterBottom
              fontSize="1.25rem"
              lineHeight="0.88"
              component="div"
              mb={1}
              color="Black"
              bgcolor="rgba(113, 193, 217, 0.2);"
              fontFamily="Noto Sans KR"
              width="175px"
            >
              학생과 학부모를 위한
            </Typography>
            <Typography
              variant="h2"
              gutterBottom
              component="div"
              mb={6}
              color="#71a5d9"
              fontWeight="bold"
              fontFamily="Noto Sans KR"
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
              color="#3E3E3E"
              noWrap={true}
              lineHeight="1.7"
              fontFamily="Noto Sans KR"
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
            <Box>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                mb={0}
                fontSize="16px"
                fontWeight="bold"
                color="rgba(0, 0, 0, 0.87)"
                fontFamily="Noto Sans KR"
              >
                실시간 알림
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                mb={0}
                fontSize="14px"
                fontWeight="400"
                lineHeight="1.57"
                color="rgba(0, 0, 0, 0.87)"
                fontFamily="Noto Sans KR"
                noWrap={true}
              >
                학교 및 학급 게시판을 통해실시
                <br />
                간으로 학교 소식확인이 가능합
                <br />
                니다.
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Box padding="4px">
              <Box
                bgcolor="rgb(95,198,190)"
                width="6px"
                height="6px"
                borderRadius="50%"
              />
            </Box>
            <Box padding="4px">
              <Box
                bgcolor="rgb(95,198,190)"
                width="6px"
                height="6px"
                borderRadius="50%"
              />
            </Box>
            <Box padding="4px">
              <Box
                bgcolor="rgb(95,198,190)"
                width="6px"
                height="6px"
                borderRadius="50%"
              />
            </Box>
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
            <Box>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                mb={0}
                fontSize="16px"
                fontWeight="bold"
                color="rgba(0, 0, 0, 0.87)"
                fontFamily="Noto Sans KR"
              >
                편리한 소통
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                mb={0}
                fontSize="14px"
                fontWeight="400"
                lineHeight="1.57"
                color="rgba(0, 0, 0, 0.87)"
                fontFamily="Noto Sans KR"
                noWrap={true}
              >
                학급게시판, 1:1게시판 등선생님
                <br />
                과의 원활한 소통을 위한 창구가
                <br /> 마련되어있습니다.
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Box padding="4px">
              <Box
                bgcolor="rgb(95,198,190)"
                width="6px"
                height="6px"
                borderRadius="50%"
              />
            </Box>
            <Box padding="4px">
              <Box
                bgcolor="rgb(95,198,190)"
                width="6px"
                height="6px"
                borderRadius="50%"
              />
            </Box>
            <Box padding="4px">
              <Box
                bgcolor="rgb(95,198,190)"
                width="6px"
                height="6px"
                borderRadius="50%"
              />
            </Box>
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
            <Box>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                mb={0}
                fontSize="16px"
                fontWeight="bold"
                color="rgba(0, 0, 0, 0.87)"
                fontFamily="Noto Sans KR"
              >
                긴급알림
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                mb={0}
                fontSize="14px"
                fontWeight="400"
                lineHeight="1.57"
                color="rgba(0, 0, 0, 0.87)"
                fontFamily="Noto Sans KR"
                noWrap={true}
              >
                사고 발생 등 선생님께 긴급하게
                <br /> 연락해야 하는 경우 긴급알림 서<br />
                비스를 이용해 선생님과 연락할
                <br /> 수 있습니다.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section3;
