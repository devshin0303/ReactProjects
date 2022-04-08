import React from "react";
import { AppBar, styled } from "@mui/material";
import MainGnb from "./HeaderComponents/MainGnb";
import SubGnb from "./HeaderComponents/SubGnb";
import "../../styles/font.css";

const MyAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  color: "#000",
  padding: "0",
  position: "sticky",
  fontFamily: "Noto Sans KR",
});

const Header = () => {
  return (
    <MyAppBar elevation={0}>
      <MainGnb />
      <SubGnb />
    </MyAppBar>
  );
};

export default Header;
