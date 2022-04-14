import { Button, styled, useMediaQuery } from "@mui/material";
import "../../../styles/font.css";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { CONSTANTS } from "../../../constants/Constants";
import { RANG } from "../../../constants/rang";
import { SSAM } from "../../../constants/ssam";

const SubBtn = styled(Button)((props) => ({
  "&:hover": {
    backgroundColor: props.btnbgcolor,
  },
  borderRadius: "9999px",
  textAlign: "center",
  margin: "0 16px",
  backgroundColor: props.btnbgcolor,
  fontWeight: "bold",
  fontFamily: "Noto Sans KR",
  variant: "contained",
  color: props.txtcolor,
  padding: "6px 16px",

  // [Theme.breakpoints.down("sm")]: {
  //   color: "red",
  // },
}));

const SubButton = ({ text, txtColor, btnColor }) => {
  const matches = useMediaQuery("(min-width:600px)");

  if (text === SSAM.talkName) {
    return (
      <>
        <SubBtn
          txtcolor="#a87cff"
          btnbgcolor="inherit"
          sx={matches ? { fontSize: "16px" } : { fontSize: "13px" }}
        >
          {CONSTANTS.child}
        </SubBtn>
        <SubBtn
          txtcolor={txtColor}
          btnbgcolor={btnColor}
          sx={matches ? { fontSize: "16px" } : { fontSize: "13px" }}
        >
          {text}
        </SubBtn>
        <Link component={RouterLink} to="/rangtalk" underline="none">
          <SubBtn
            txtcolor="rgb(95, 198, 190)"
            btnbgcolor="inherit"
            sx={matches ? { fontSize: "16px" } : { fontSize: "13px" }}
          >
            {RANG.talkName}
          </SubBtn>
        </Link>
      </>
    );
  } else if (text === RANG.talkName) {
    return (
      <>
        <SubBtn
          txtcolor="#a87cff"
          btnbgcolor="inherit"
          sx={matches ? { fontSize: "16px" } : { fontSize: "13px" }}
        >
          {CONSTANTS.child}
        </SubBtn>
        <Link to="/ssamtalk" underline="none" component={RouterLink}>
          <SubBtn
            txtcolor="rgb(113, 165, 217)"
            btnbgcolor="inherit"
            sx={matches ? { fontSize: "16px" } : { fontSize: "13px" }}
          >
            {SSAM.talkName}
          </SubBtn>
        </Link>
        <SubBtn
          txtcolor={txtColor}
          btnbgcolor={btnColor}
          sx={matches ? { fontSize: "16px" } : { fontSize: "13px" }}
        >
          {text}
        </SubBtn>
      </>
    );
  }

  // const location = window.location.pathname;

  // console.log(txtColor);
  // console.log(btnColor);

  // return (
  //   <>
  //     <SubBtn txtcolor="#a87cff" btnbgcolor="inherit">
  //       아이랑톡
  //     </SubBtn>
  //     <SubBtn txtcolor={txtColor} to="/ssamtalk" btnbgcolor={btnColor}>
  //       쌤이랑톡
  //     </SubBtn>
  //     <Link component={RouterLink} to="/rangtalk" underline="none">
  //       <SubBtn txtcolor="rgb(95, 198, 190)" btnbgcolor="inherit">
  //         학교랑톡
  //       </SubBtn>
  //     </Link>
  //   </>
  // );
};

export default SubButton;
