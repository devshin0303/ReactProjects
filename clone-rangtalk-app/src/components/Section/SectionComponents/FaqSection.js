import { Container, Paper, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../../styles/font.css";
import { FaqAccordion } from "./FaqSectionComponents/FaqAccordion";
import PropTypes from "prop-types";
import { ACCORDIANTEXT } from "../../../constants/accordianText";

const FaqSection = ({ plusImg, mainColor, minusImg }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      id="faqSection"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={
        matches
          ? { paddingTop: 17, paddingBottom: 17 }
          : { paddingTop: 5, paddingBottom: 5 }
      }
      pt={17}
      pb={17}
      bgcolor="#e1e7ea"
    >
      <Container maxWidth="lg" sx={{ height: "auto" }}>
        <Typography
          variant="h5"
          fontFamily="Noto Sans KR"
          fontWeight="400"
          sx={matches ? { fontSize: "20px" } : { fontSize: "16px" }}
        >
          랑톡의 FAQ
        </Typography>
        <Typography
          variant="h1"
          fontFamily="Noto Sans KR"
          fontWeight={400}
          sx={matches ? { fontSize: "56px" } : { fontSize: "36px" }}
        >
          자주묻는 <b>질문</b>
        </Typography>
        <Paper
          elevation={0}
          variant="outlined"
          sx={{
            mt: "38px",
            overflow: "scroll",
            height: "680px",
          }}
        >
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="01."
            sum={ACCORDIANTEXT.firstSum}
            details={ACCORDIANTEXT.firstDtails}
          />
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="02."
            sum="KT 통신사가 아니여도 사용 가능한가요?"
            details="학교랑톡은 통신사, 단말 OS 상관없이 모두 이용이 가능합니다."
          />
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="03."
            sum="로그인 비밀번호를 모르겠어요."
            details="학교랑톡은 통신사, 단말 OS 상관없이 모두 이용이 가능합니다."
          />
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="04."
            sum="근무시간 설정은 어떻게 하나요?"
            details="[내정보 -> 설정 -> 통화가능시간 -> 업무중 -> 업무시간 설정 ] 을 통해 근무시간 설정이 가능합니다."
          />
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="05."
            sum="휴가 기간 설정은 어떻게 하나요?"
            details="[설정 -> 통화가능시간 -> 휴가중 -> 휴가기간 설정 ] 을 통해 휴가기간 설정이 가능합니다."
          />
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="06."
            sum="학부모/학생도 앱을 설치해야만 선생님과 통화가 가능한가요?"
            details="학부모/학생이 앱을 설치하지 않아도, 선생님께서 부여 받으신 랑톡 유선번호로 착신/발신 가능합니다."
          />
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="07."
            sum="통화 녹음은 어떻게 사용하나요?"
            details="Android) [설정 -> 통화녹음 -> 자동녹음] ON 설정 시, 자동으로 통화 녹음이 가능합니다."
          />
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="08."
            sum="통화 녹음한 파일은 어디에서 확인 할 수 있나요?"
            details="학교랑톡 앱의 통화 녹음 파일은 개인 휴대폰 단말기에 저장됩니다."
          />
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="09."
            sum="학부모/학생 연락처 추가는 어떻게 하나요?"
            details="[연락처 -> 연락처 추가] 에서 정보 입력 후 저장하여 추가 가능합니다."
          />
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="10."
            sum="연락처 검색은 어떻게 하나요?"
            details="연락처 매뉴에서 검색 혹은 통화 다이얼 화면에서 연락처 검색 기능을 통해 검색 가능합니다."
          />
          <FaqAccordion
            plusImg={plusImg}
            minusImg={minusImg}
            mainColor={mainColor}
            num="11."
            sum="랑톡 지원센터 연락처는 어떻게 되나요?"
            details="랑톡 지원센터 연락처는 아래와 같습니다."
          />
        </Paper>
      </Container>
    </Box>
  );
};

FaqAccordion.propTypes = {
  plusImg: PropTypes.string.isRequired,
  minusImg: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
};

export default FaqSection;
