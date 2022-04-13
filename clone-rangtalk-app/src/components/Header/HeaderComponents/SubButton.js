import { Button, styled } from "@mui/material";
import "../../../styles/font.css";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { CONSTANTS } from "../../../constants/Constants";
import { RANG } from "../../../constants/rang";
import { SSAM } from "../../../constants/ssam";
import { Box, breakpoints } from "@mui/system";

const Root = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));

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
  fontSize: "16px",
  variant: "contained",
  color: props.txtcolor,
  padding: "6px 16px",

  // [Theme.breakpoints.down("sm")]: {
  //   color: "red",
  // },
}));

const SubButton = ({ text, txtColor, btnColor }) => {
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

  if (text === SSAM.talkName) {
    return (
      <Root>
        <SubBtn txtcolor="#a87cff" btnbgcolor="inherit">
          {CONSTANTS.child}
        </SubBtn>
        <SubBtn txtcolor={txtColor} btnbgcolor={btnColor}>
          {text}
        </SubBtn>
        <Link component={RouterLink} to="/rangtalk" underline="none">
          <SubBtn txtcolor="rgb(95, 198, 190)" btnbgcolor="inherit">
            {RANG.talkName}
          </SubBtn>
        </Link>
      </Root>
    );
  } else if (text === RANG.talkName) {
    return (
      <Root>
        <SubBtn txtcolor="#a87cff" btnbgcolor="inherit">
          {CONSTANTS.child}
        </SubBtn>
        <Link to="/ssamtalk" underline="none" component={RouterLink}>
          <SubBtn txtcolor="rgb(113, 165, 217)" btnbgcolor="inherit">
            {SSAM.talkName}
          </SubBtn>
        </Link>
        <SubBtn txtcolor={txtColor} btnbgcolor={btnColor}>
          {text}
        </SubBtn>
      </Root>
    );
  }
};

export default SubButton;
