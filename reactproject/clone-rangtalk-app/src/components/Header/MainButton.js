import styled from "@emotion/styled";
import { Button } from "@mui/material";

const MainButton = styled(Button)({
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  fontWeight: "600",
  color: "black",
  fontSize: "16px",
  boxSizing: "border-box",
  marginLeft: "45px",
  fontFamily: "NotoSansCJKkr",
  variant: "text",
});

export default MainButton;
