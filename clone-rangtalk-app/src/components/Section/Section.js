import React from "react";
import MainTopSection from "./SectionComponents/MainTopSection";
import YoutubePlayerSection from "./SectionComponents/YoutubePlayerSection";
import IntroRangtalkSection from "./SectionComponents/IntroRangtalkSection";
import FaqSection from "./SectionComponents/FaqSection";
import DownloadSection from "./SectionComponents/DownloadSection";
import ContactSection from "./SectionComponents/ContactSection";

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
  downManuColor,
  downTalkImg,
  downTxtColor,
  downText,
}) => {
  return (
    <>
      <MainTopSection backMainImg={backMainImg} />
      <YoutubePlayerSection />
      <IntroRangtalkSection
        introBackColor={introBackColor}
        introPhoneImg={introPhoneImg}
        introTextBgColor={introTextBgColor}
        introTextColor={introTextColor}
        introNoticeImg={introNoticeImg}
        introCommuImg={introCommuImg}
        introEmergencyImg={introEmergencyImg}
      />
      <FaqSection />
      <DownloadSection
        downTopBtnName={downTopBtnName}
        downBackImg={downBackImg}
        downManuColor={downManuColor}
        downTalkImg={downTalkImg}
        downTxtColor={downTxtColor}
        downText={downText}
      />
      <ContactSection />
    </>
  );
};

export default Section;
