import { Button, Container, Toolbar, Box } from "@mui/material";
import React from "react";
import "../../../styles/font.css";
import SubButton from "./SubButton";
import PropTypes from "prop-types";

const SubGnb = ({ txtColor, btnColor, text }) => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center">
          {/* <SubButton text="아이랑톡"></SubButton> */}
          <SubButton
            text={text}
            txtColor={txtColor}
            btnColor={btnColor}
          ></SubButton>
        </Box>
      </Container>
    </Toolbar>
  );
};

SubButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubGnb;

{
  /* <Button
            variant="contained"
            sx={{
              borderRadius: "9999PX",
              textAlign: "center",
              margin: "0 16px",
              backgroundColor: "#a87cff",
              fontWeight: "bold",
              fontFamily: "Noto Sans KR",
              fontSize: "16px",
            }}
          >
            아이랑톡
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "9999PX",
              fontSize: "16px",
              textAlign: "center",
              margin: "0 16px",
              backgroundColor: "#71a5d9",
              fontWeight: "bold",
              fontFamily: "Noto Sans KR",
            }}
          >
            쌤이랑톡
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "9999PX",
              textAlign: "center",
              margin: "0 16px",
              backgroundColor: "#5fc6be",
              fontWeight: "bold",
              fontFamily: "Noto Sans KR",
              fontSize: "16px",
            }}
          >
            학교랑톡
          </Button> */
}
