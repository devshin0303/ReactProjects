import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import PropTypes from "prop-types";
import { RANG } from "../constants/rang";

function Rangtalk() {
  return (
    <>
      <Header
        mainLogoImg={RANG.mainLogo}
        loginBtnColor={RANG.mainColor}
        txtColor="#FFF"
        btnColor={RANG.mainColor}
        text={RANG.talkName}
      />
      <Section
        backMainImg="img/img_rangtalk_main/img_main@2x.png"
        backMainMobileImg="img/img_mobile_bg_rang/img-m.png"
        talkName={RANG.talkName}
        introBackColor="rgba(134, 185, 180, 0.1)"
        introPhoneImg="img/img_mockup_school/img_mockup_school.png"
        introTextBgColor="#d8efed"
        introTextColor={RANG.mainColor}
        introNoticeImg="img/img_sub_01.svg"
        introCommuImg="img/img_sub_02.svg"
        introEmergencyImg="img/img_sub_03.svg"
        introTalkName={RANG.talkName}
        downTopBtnName={RANG.talkName}
        downBackImg="img/img_bottom_phone_school/img_bottom_phone@2x.png"
        downTxtColor={RANG.mainColor}
        downTalkImg="img/img_bottom_logo_school/img_bottom_logo@2x.png"
        downManualColor={RANG.mainColor}
        downText={RANG.talkName}
        downMobileImg="img/img_bottom_mobileR/img_bottom_mockup.png"
        plusImg="img/ic_faq_list_n_rang/ic_faq_list_n.png"
        minusImg="img/ic_faq_list_s_rang/ic_faq_list_s.png"
        mainColor={RANG.mainColor}
        contactImg="img/ic_contact_service/ic_contact_service.png"
        btnColor={RANG.mainColor}
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
  introTalkName: PropTypes.string.isRequired,
  introEmergencyImg: PropTypes.string.isRequired,
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

export default Rangtalk;
