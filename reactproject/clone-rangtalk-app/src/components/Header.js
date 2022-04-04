import React from "react";
import MainGnb from "./MainGnb";
import SubGnb from "./SubGnb";
import Paper from "@mui/material/Paper";
import { AppBar } from "@mui/material";

const Header = () => {
  return (
    <div>
      <header>
        <Paper elevation={0} variant="outlined">
          <AppBar position="sticky" color="inherit">
            <MainGnb />
          </AppBar>
        </Paper>
        <SubGnb />
      </header>
    </div>
  );
};

export default Header;
