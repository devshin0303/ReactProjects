import * as React from "react";
import MainTopSection from "./SectionComponents/MainTopSection";
import YoutubePlayerSection from "./SectionComponents/YoutubePlayerSection";
import IntroRangtalkSection from "./SectionComponents/IntroRangtalkSection";
import FaqSection from "./SectionComponents/FaqSection";
import DownloadSection from "./SectionComponents/DownloadSection";
import ContactSection from "./SectionComponents/ContactSection";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

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
  const INIT_VALUE_OBJ = {
    downTopBtnName,
    downBackImg,
    downManualColor,
    downTalkImg,
    downTxtColor,
    downText,
    downMobileImg,
  };

  const [downloadCat, setDownloadCat] = React.useState({ ...INIT_VALUE_OBJ });

  // React.useEffect(() => {
  //   console.log(downloadCat);
  // }, [downloadCat]);

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
        {...downloadCat}
        setDownloadCat={setDownloadCat}
        // downTopBtnName={downTopBtnName}
        // downBackImg={downBackImg}
        // downManualColor={downManualColor}
        // downTalkImg={downTalkImg}
        // downTxtColor={downTxtColor}
        // downText={downText}
        // downMobileImg={downMobileImg}
      />
      <ContactSection contactImg={contactImg} btnColor={btnColor} />
    </Box>
  );
};

export default Section;

DownloadSection.propTypes = {
  setDownloadCat: PropTypes.func.isRequired,
};
