import { Button, styled } from "@mui/material";

import "../../../styles/font.css";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

let SubBtn = styled(Button)((props) => ({
  "&:hover": {
    backgroundColor: props.btnbgcolor,
  },
  borderRadius: "9999px",
  textAlign: "center",
  margin: "0 16px",
  backgroundColor: props.btnbgcolor,
  fontWeight: "bold",
  fontFamily: "Noto Sans KR",
  fontSize: "16px",
  variant: "contained",
  color: props.txtcolor,
  padding: "6px 16px",
  // [Theme.breakpoints.down("sm")]: {
  //   color: "red",
  // },
}));

const SubButton = ({ text, txtColor, btnColor }) => {
  if (text === "쌤이랑톡") {
    return (
      <>
        <SubBtn txtcolor={txtColor} btnbgcolor={btnColor}>
          {text}
        </SubBtn>
        <Link to="/rangtalk" sx={{ textDecorationLine: "none" }}>
          <SubBtn txtcolor="rgb(95, 198, 190)">학교랑톡</SubBtn>
        </Link>
      </>
    );
  } else if (text === "학교랑톡") {
    return (
      <>
        <Link to="/">
          <SubBtn
            txtcolor="rgb(113, 165, 217)"
            sx={{ textDecorationLine: "none" }}
          >
            쌤이랑톡
          </SubBtn>
        </Link>
        <SubBtn txtcolor={txtColor} btnbgcolor={btnColor}>
          {text}
        </SubBtn>
      </>
    );
  }
};

export default SubButton;
