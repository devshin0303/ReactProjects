import React from "react";
import MainTopSection from "./SectionComponents/MainTopSection";
import YoutubePlayerSection from "./SectionComponents/YoutubePlayerSection";
import IntroRangtalkSection from "./SectionComponents/IntroRangtalkSection";
import FaqSection from "./SectionComponents/FaqSection";
import DownloadSection from "./SectionComponents/DownloadSection";
import ContactSection from "./SectionComponents/ContactSection";

const Section = () => {
  return (
    <>
      <MainTopSection />
      <YoutubePlayerSection />
      <IntroRangtalkSection />
      <FaqSection />
      <DownloadSection />
      <ContactSection />
    </>
  );
};

export default Section;
