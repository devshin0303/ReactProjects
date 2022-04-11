import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import PropTypes from "prop-types";

function Rangtalk() {
  return (
    <>
      <Header
        mainLogoImg="img/img_rangtalkmain_img/img_fulllogo_big@2x.png"
        loginBtnColor="rgba(95, 198, 190)"
        txtColor="#fff"
        btnColor="rgb(95, 198, 190)"
        text="학교랑톡"
      />
      <Section />
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
