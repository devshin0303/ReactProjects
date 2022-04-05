import styled from "@emotion/styled";
import { Button } from "@mui/material";

const MainButton = styled(Button)({
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  color: "black",
  fontSize: "16px",
  boxSizing: "border-box",
  marginLeft: "45px",
  variant: "text",
  lineHeight: 1.25,
});

export default MainButton;
