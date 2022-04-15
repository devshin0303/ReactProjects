import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import PropTypes from "prop-types";
import { SSAM } from "../constants/ssam";

function Ssamtalk() {
  return (
    <>
      <Header
        mainLogoImg={SSAM.mainLogo}
        loginBtnColor={SSAM.mainColor}
        txtColor="#fff"
        btnColor={SSAM.mainColor}
        text={SSAM.talkName}
      />
      <Section
        backMainImg="img/img_ssamtalk_main/img_main@2x.jpg"
        backMainMobileImg="img/img_mobile_bg_sec1/bg@2x.png"
        talkName={SSAM.talkName}
        introBackColor="#fff"
        introPhoneImg="img/img_mockup_teacher/img_mockup_teacher.jpg"
        introTextBgColor="rgba(113, 193, 217, 0.2)"
        introTextColor={SSAM.mainColor}
        introNoticeImg="img/img_sub_04.svg"
        introCommuImg="img/img_sub_05.svg"
        introEmergencyImg="img/img_sub_06.svg"
        introTalkName={SSAM.talkName}
        downTopBtnName={SSAM.talkName}
        downBackImg="img/img_bottom_phone/img_bottom_phone_02@2x.png"
        downTxtColor={SSAM.mainColor}
        downTalkImg="img/img_bottom_logo/img_bottom_logo_2@2x.png"
        downManualColor={SSAM.mainColor}
        downText={SSAM.talkName}
        downMobileImg="img/img_bottom_mobile/img_bottom_mockup.png"
        plusImg="img/ic_faq_list_n/ic_faq_list_n.png"
        minusImg="img/ic_faq_list_s/ic_faq_list_s.png"
        mainColor={SSAM.mainColor}
        contactImg="img/ic_contact_service/ic_contact_service.png"
        btnColor={SSAM.mainColor}
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

Section.propTypes = {
  backMainImg: PropTypes.string.isRequired,
  introBackColor: PropTypes.string.isRequired,
  introPhoneImg: PropTypes.string.isRequired,
  introTextBgColor: PropTypes.string.isRequired,
  introTextColor: PropTypes.string.isRequired,
  introNoticeImg: PropTypes.string.isRequired,
  introCommuImg: PropTypes.string.isRequired,
  introEmergencyImg: PropTypes.string.isRequired,
  introTalkName: PropTypes.string.isRequired,
  downTopBtnName: PropTypes.string.isRequired,
  downBackImg: PropTypes.string.isRequired,
  downTxtColor: PropTypes.string.isRequired,
  downTalkImg: PropTypes.string.isRequired,
  downManualColor: PropTypes.string.isRequired,
  downText: PropTypes.string.isRequired,
  downMobileImg: PropTypes.string.isRequired,
  plusImg: PropTypes.string.isRequired,
  minusImg: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  contactImg: PropTypes.string.isRequired,
  btnColor: PropTypes.string.isRequired,
};

export default Ssamtalk;
