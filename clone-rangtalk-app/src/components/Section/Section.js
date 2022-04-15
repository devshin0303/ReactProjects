import React from "react";
import MainTopSection from "./SectionComponents/MainTopSection";
import YoutubePlayerSection from "./SectionComponents/YoutubePlayerSection";
import IntroRangtalkSection from "./SectionComponents/IntroRangtalkSection";
import FaqSection from "./SectionComponents/FaqSection";
import DownloadSection from "./SectionComponents/DownloadSection";
import ContactSection from "./SectionComponents/ContactSection";
import { Box } from "@mui/material";

const Section = ({
  backMainImg,
  introBackColor,
  introPhoneImg,
  introTextBgColor,
  introTextColor,
  introNoticeImg,
  introCommuImg,
  introEmergencyImg,
  downTopBtnName,
  downBackImg,
  downManualColor,
  downTalkImg,
  downTxtColor,
  downText,
  plusImg,
  minusImg,
  mainColor,
  introTalkName,
  backMainMobileImg,
  talkName,
  downMobileImg,
  contactImg,
  btnColor,
}) => {
  return (
    <Box id="mainTop">
      <MainTopSection
        backMainImg={backMainImg}
        backMainMobileImg={backMainMobileImg}
        talkName={talkName}
      />
      <YoutubePlayerSection />
      <IntroRangtalkSection
        introBackColor={introBackColor}
        introPhoneImg={introPhoneImg}
        introTextBgColor={introTextBgColor}
        introTextColor={introTextColor}
        introNoticeImg={introNoticeImg}
        introCommuImg={introCommuImg}
        introEmergencyImg={introEmergencyImg}
        introTalkName={introTalkName}
      />
      <FaqSection plusImg={plusImg} minusImg={minusImg} mainColor={mainColor} />
      <DownloadSection
        downTopBtnName={downTopBtnName}
        downBackImg={downBackImg}
        downManualColor={downManualColor}
        downTalkImg={downTalkImg}
        downTxtColor={downTxtColor}
        downText={downText}
        downMobileImg={downMobileImg}
      />
      <ContactSection contactImg={contactImg} btnColor={btnColor} />
    </Box>
  );
};

export default Section;
