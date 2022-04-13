import React from "react";
import { AppBar, styled } from "@mui/material";
import MainGnb from "./HeaderComponents/MainGnb";
import SubGnb from "./HeaderComponents/SubGnb";
import "../../styles/font.css";
import { PropTypes } from "prop-types";

const MyAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  color: "#000",
  padding: "0",
  position: "sticky",
  fontFamily: "Noto Sans KR",
});

const Header = ({ mainLogoImg, loginBtnColor, txtColor, btnColor, text }) => {
  return (
    <>
      <MyAppBar elevation={0}>
        <MainGnb mainLogoImg={mainLogoImg} loginBtnColor={loginBtnColor} />
        <SubGnb txtColor={txtColor} btnColor={btnColor} text={text} />
      </MyAppBar>
    </>
  );
};

MainGnb.propTypes = {
  mainLogoImg: PropTypes.string.isRequired,
  loginBtnColor: PropTypes.string.isRequired,
};

export default Header;
