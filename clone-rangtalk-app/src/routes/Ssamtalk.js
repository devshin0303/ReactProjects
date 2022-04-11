import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import PropTypes from "prop-types";

function Ssamtalk() {
  return (
    <div>
      <Header
        mainLogoImg="img/img_fulllogo_big/img_fulllogo_big@2x.png"
        loginBtnColor="rgb(113, 165, 217)"
        txtColor="#fff"
        btnColor="rgb(113, 165, 217)"
        text="쌤이랑톡"
      />
      <Section />
      <Footer />
    </div>
  );
}

Header.propTypes = {
  mainLogoImg: PropTypes.string.isRequired,
  loginBtnColor: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
  btnColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Ssamtalk;
