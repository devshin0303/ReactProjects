import { ThemeContext } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { green } from "@mui/material/colors";
import "../../styles/font.css";

const MainButton = styled(Button)({
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  color: "rgba(0, 0, 0, 0.87)",
  fontSize: "16px",
  boxSizing: "border-box",
  marginLeft: "45px",
  variant: "text",
  lineHeight: 1.25,
  padding: "4px 5px",
  fontFamily: "Noto Sans KR",
  fontWeight: "500",
  // [theme.breakpoints.up("sm")]: {
  //   color: "red",
  // },
});

export default MainButton;
