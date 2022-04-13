import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import PropTypes from "prop-types";
import { Constants } from "../components/constants/Constants";
import { ssam } from "../components/constants/ssam";

function Ssamtalk() {
  return (
    <>
      <Header
        mainLogoImg={ssam.main_logo}
        loginBtnColor={ssam.main_color}
        txtColor="#fff"
        btnColor={ssam.main_color}
        text={ssam.talk_name}
      />
      <Section
        backMainImg="img/img_ssamtalk_main/img_main@2x.jpg"
        introBackColor="#fff"
        introPhoneImg="img/img_mockup_teacher/img_mockup_teacher.jpg"
        introTextBgColor="rgba(113, 193, 217, 0.2)"
        introTextColor={ssam.main_color}
        introNoticeImg="img/img_sub_04.svg"
        introCommuImg="img/img_sub_05.svg"
        introEmergencyImg="img/img_sub_06.svg"
        downTopBtnName={ssam.talk_name}
        downBackImg="img/img_bottom_phone/img_bottom_phone_02@2x.png"
        downTxtColor={ssam.main_color}
        downTalkImg="img/img_bottom_logo/img_bottom_logo_2@2x.png"
        downManuColor={ssam.main_color}
        downText={ssam.talk_name}
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
};

export default Ssamtalk;
