import styled from "@emotion/styled";
import MainButton from "../../../Header/HeaderComponents/MainButton";
import "../../../../styles/font.css";
import { CONSTANTS } from "../../../../constants/Constants";
import { SSAM } from "../../../../constants/ssam";
import { RANG } from "../../../../constants/rang";

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

const DownloadSectionTopBtn = ({ downTopBtnName, downPageConverter }) => {
  if (downTopBtnName === SSAM.talkName) {
    return (
      <>
        <Btn txtcolor="#a9b6c7">{CONSTANTS.child}</Btn>
        <Btn
          onClick={downPageConverter}
          bordercolor="2px solid #404040"
          txtcolor="black"
        >
          {downTopBtnName}
        </Btn>
        <Btn txtcolor="#a9b6c7" onClick={downPageConverter}>
          {RANG.talkName}
        </Btn>
      </>
    );
  } else if (downTopBtnName === RANG.talkName) {
    return (
      <>
        <Btn txtcolor="#a9b6c7">{CONSTANTS.child}</Btn>
        <Btn onClick={downPageConverter} txtcolor="#a9b6c7">
          {SSAM.talkName}
        </Btn>
        <Btn
          onClick={downPageConverter}
          bordercolor="2px solid #404040"
          txtcolor="black"
        >
          {downTopBtnName}
        </Btn>
      </>
    );
  }
};

export default DownloadSectionTopBtn;
