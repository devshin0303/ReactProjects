import styled from "@emotion/styled";
import MainButton from "../../Header/HeaderComponents/MainButton";
import "../../../styles/font.css";

const Btn = styled(MainButton)({
  borderRadius: 0,
  color: "#a9b6c7",
  fontWeight: "bold",
  fontSize: "18px",
  padding: "8px",
  marginRight: "34px",
  minWidth: "64px",
  marginLeft: 0,
  borderBottom: "none",
});

const DownloadSectionTopBtn = ({ btnName }) => {
  const onClick = () => {
    console.log("clicked!!");
  };

  return <Btn onClick={onClick}>{btnName}</Btn>;
};

export default DownloadSectionTopBtn;
