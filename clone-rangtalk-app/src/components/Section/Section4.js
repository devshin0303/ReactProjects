import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../styles/font.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Section4 = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={15}
      bgcolor="#e1e7ea"
    >
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
        <Typography
          variant="h5"
          fontFamily="Noto Sans KR"
          fontWeight="400"
          fontSize="20px"
        >
          랑톡의 FAQ
        </Typography>
        <Typography
          variant="h1"
          fontFamily="Noto Sans KR"
          fontWeight={400}
          fontSize="56px"
        >
          자주묻는 <b>질문</b>
        </Typography>
        <Paper
          elevation={0}
          variant="outlined"
          sx={{ mt: "38px", overflow: "scroll" }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ height: "64px", padding: "18px 0" }}
              fontFamily="Noto Sans KR"
            >
              <Typography fontFamily="Noto Sans KR">
                01.통화 요금이 궁금합니다.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                학교랑톡 통화 요금은 아래와 같습니다. (VAT 포함) ㅁ 이너텔
                C-type형 시내 : 42.9원/3분 시외 : 42.9원3분(30km 미만),
                15.95원/10초(30km 이상) 이동전화 : 15.95원/10초 ㅁ
                기업인터넷전화 Centrex형 시내/시외 : 41.6원/3분(5년 약정시)
                이동전화 : 13.6원/10초(5년 약정시)
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>02. KT 통신사가 아니여도 사용 가능한가요?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                학교랑톡은 통신사, 단말 OS 상관없이 모두 이용이 가능합니다.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>03. 로그인 비밀번호를 모르겠어요.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                화면 중앙에 있는 '비밀번호를 잊으셨나요?' 선택 시, 비밀번호
                변경이 가능합니다. 새 비밀번호 설정 시, 휴대폰 인증이
                필요합니다.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Container>
    </Box>
  );
};

export default Section4;
