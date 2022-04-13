import styled from "@emotion/styled";
import MainButton from "../../../Header/HeaderComponents/MainButton";
import "../../../../styles/font.css";
import { Constants } from "../../../constants/Constants";

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

const DownloadSectionTopBtn = ({ downTopBtnName }) => {
  const onClick = () => {
    console.log("clicked!!");
  };
  if (downTopBtnName === Constants.ssam) {
    return (
      <>
        <Btn txtcolor="#a9b6c7">{Constants.child}</Btn>
        <Btn onClick={onClick} bordercolor="2px solid #404040" txtcolor="black">
          {downTopBtnName}
        </Btn>
        <Btn txtcolor="#a9b6c7" onClick={onClick}>
          {Constants.school}
        </Btn>
      </>
    );
  } else if (downTopBtnName === Constants.school) {
    return (
      <>
        <Btn txtcolor="#a9b6c7">{Constants.child}</Btn>
        <Btn onClick={onClick} txtcolor="#a9b6c7">
          {Constants.ssam}
        </Btn>
        <Btn onClick={onClick} bordercolor="2px solid #404040" txtcolor="black">
          {downTopBtnName}
        </Btn>
      </>
    );
  }
};

export default DownloadSectionTopBtn;
