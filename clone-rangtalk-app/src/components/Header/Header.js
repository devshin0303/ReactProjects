import React from "react";
import { AppBar, styled } from "@mui/material";
import MainGnb from "./MainGnb";
import SubGnb from "./SubGnb";

const MyAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  color: "#000",
  padding: "0",
  position: "sticky",
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
