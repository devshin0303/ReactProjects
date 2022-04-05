import { Button, Container, Toolbar, Box } from "@mui/material";
import React from "react";

const SubGnb = () => {
  return (
    <Toolbar
      sx={{ diplay: "flex", alignItems: "center", justifyContent: "center" }}
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
            }}
          >
            아이랑톡
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "9999PX",
              textAlign: "center",
              margin: "0 16px",
              backgroundColor: "#71a5d9",
              fontWeight: "bold",
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
