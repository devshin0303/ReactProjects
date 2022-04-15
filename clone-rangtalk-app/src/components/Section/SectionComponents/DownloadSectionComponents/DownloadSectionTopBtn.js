import styled from "@emotion/styled";
import MainButton from "../../../Header/HeaderComponents/MainButton";
import "../../../../styles/font.css";
import {
  CATEGORY_RANG_OBJ,
  CATEGORY_SSAM_OBJ,
  CONSTANTS,
} from "../../../../constants/Constants";
// import { SSAM } from "../../../../constants/ssam";
// import { RANG } from "../../../../constants/rang";
// import { Link as RouterLink } from "react-router-dom";
// import { Link } from "@mui/material";

const Btn = styled(MainButton)((props) => ({
  borderRadius: 0,
  color: props.txtcolor,
  fontWeight: "bold",
  fontSize: "18px",
  padding: "8px",
  marginRight: "34px",
  minWidth: "64px",
  marginLeft: 0,
  borderBottom: props.bordercolor,
}));

const DownloadSectionTopBtn = ({
  downTopBtnName,
  downPageConverter,
  setDownloadCat,
}) => {
  return (
    <>
      <Btn txtcolor="#a9b6c7">{CONSTANTS.child}</Btn>
      <Btn
        onClick={() => setDownloadCat({ ...CATEGORY_SSAM_OBJ })}
        bordercolor={downTopBtnName === "쌤이랑톡" ? "2px solid #404040" : ""}
        txtcolor={downTopBtnName === "쌤이랑톡" ? "black" : "#a9b6c7"}
      >
        쌤이랑톡
      </Btn>
      <Btn
        onClick={() => setDownloadCat({ ...CATEGORY_RANG_OBJ })}
        bordercolor={downTopBtnName === "학교랑톡" ? "2px solid #404040" : ""}
        txtcolor={downTopBtnName === "학교랑톡" ? "black" : "#a9b6c7"}
      >
        학교랑톡
      </Btn>
    </>
  );
  // if (downTopBtnName === SSAM.talkName) {
  //   return (
  //     <>
  //       <Btn txtcolor="#a9b6c7">{CONSTANTS.child}</Btn>
  //       <Btn
  //         onClick={downPageConverter}
  //         bordercolor="2px solid #404040"
  //         txtcolor="black"
  //       >
  //         {downTopBtnName}
  //       </Btn>

  //       <Btn txtcolor="#a9b6c7">{RANG.talkName}</Btn>
  //     </>
  //   );
  // } else if (downTopBtnName === RANG.talkName) {
  //   return (
  //     <>
  //       <Btn txtcolor="#a9b6c7">{CONSTANTS.child}</Btn>

  //       <Btn onClick={downPageConverter} txtcolor="#a9b6c7">
  //         {SSAM.talkName}
  //       </Btn>

  //       <Btn
  //         onClick={downPageConverter}
  //         bordercolor="2px solid #404040"
  //         txtcolor="black"
  //       >
  //         {downTopBtnName}
  //       </Btn>
  //     </>
  //   );
  // }
};

export default DownloadSectionTopBtn;
