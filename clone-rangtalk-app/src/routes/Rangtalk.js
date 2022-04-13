import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import PropTypes from "prop-types";
import { Constants } from "../components/constants/Constants";
import { RANG } from "../components/constants/rang";

function Rangtalk() {
  return (
    <>
      <Header
        mainLogoImg={RANG.mainLogo}
        loginBtnColor={Constants.schoolMainColor}
        txtColor={Constants.white}
        btnColor={Constants.schoolMainColor}
        text={Constants.school}
      />
      <Section
        backMainImg={Constants.section.schoolBackMainImg}
        introBackColor={Constants.section.schoolIntroBgColor}
        introPhoneImg={Constants.section.schoolPhoneImg}
        introTextBgColor={Constants.section.schoolIntroTextBgC}
        introTextColor={Constants.schoolMainColor}
        introNoticeImg={Constants.section.schoolIntroNoticeImg}
        introCommuImg={Constants.section.schoolIntroCommuImg}
        introEmergencyImg={Constants.section.schoolIntroEmerImg}
        downTopBtnName={Constants.school}
        downBackImg={Constants.section.schoolBottomPhone}
        downTxtColor={Constants.schoolMainColor}
        downTalkImg={Constants.section.schoolBottomTalkImg}
        downManuColor={Constants.schoolMainColor}
        downText={Constants.school}
      />
      <Footer />
    </>
  );
}

Header.propTypes = {
  mainLogoImg: PropTypes.string.isRequired,
  loginBtnColor: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
  btnColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Rangtalk;
