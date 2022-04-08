import { Button, Container, Toolbar, Box } from "@mui/material";
import React from "react";
import "../../../styles/font.css";

const SubGnb = () => {
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
          <Button
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
          </Button>
        </Box>
      </Container>
    </Toolbar>
  );
};

export default SubGnb;
