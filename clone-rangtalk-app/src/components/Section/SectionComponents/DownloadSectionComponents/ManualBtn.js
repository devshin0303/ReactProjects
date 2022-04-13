import { CardMedia, styled, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { RANG } from "../../../../constants/rang";
import { SSAM } from "../../../../constants/ssam";
import PdfS from "../../../../documents/kt_ssam_manual.pdf";
import PdfR from "../../../../documents/kt_rang_manual.pdf";

const Btn = styled(Button)((props) => ({
  color: "#fff",

  "&:hover": {
    backgroundColor: props.bgc,
  },
  textAlign: "center",
  width: "100%",
  backgroundColor: props.bgc,
  marginBottom: 10,
}));

export const ManualBtn = ({ downManualColor, downTopBtnName }) => {
  const onClick = () => {
    if (downTopBtnName === SSAM.talkName) {
      window.open(PdfS, "_blank");
    } else if (downTopBtnName === RANG.talkName) {
      window.open(PdfR, "_blank");
    }
  };
  return (
    <Btn bgc={downManualColor} onClick={onClick}>
      <Typography
        component="span"
        sx={{
          fontWeight: "bold",
          fontFamily: "Noto Sans KR",
          fontSize: "18px",
          marginRight: "6px",
        }}
      >
        {downTopBtnName}매뉴얼
      </Typography>
      <CardMedia
        component="img"
        image="img/img_down/down_img.png"
        alt="downImg"
        sx={{ width: "auto" }}
      ></CardMedia>
    </Btn>
  );
};
