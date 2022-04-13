import styled from "@emotion/styled";
import { Button, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CONSTANTS } from "../../../../constants/Constants";
import { RANG } from "../../../../constants/rang";
import { SSAM } from "../../../../constants/ssam";

const DownloadBtnStyle = styled(Button)({
  "&:hover": {
    backgroundColor: "#252525",
  },
  backgroundColor: "#252525",
  width: "180px",
  height: "60px",
  borderRadius: "4px",
  padding: 0,
  margin: 0,
});

const MarketDownloadBtn = ({ appMarket, downText }) => {
  const [ssamAndroidLink, setSsamAndroidLink] = useState([]);
  const [ssamIosLink, setSsamIosLink] = useState([]);
  const [schoolAndroidLink, setSchoolAndroidLink] = useState([]);
  const [schoolIosLink, setSchoolIosLink] = useState([]);
  // const [downloadObj, setDownloadObj] = useState();

  useEffect(() => {
    fetch(`https://t-api.rangtalk.com/common/v1/binary`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);

        // setDownloadObj(json);
        setSsamAndroidLink(json.samrangtalkAndroid.downloadUrl);
        setSsamIosLink(json.samrangtalkIos.downloadUrl);
        setSchoolAndroidLink(json.rangtalkAndroid.downloadUrl);
        setSchoolIosLink(json.rangtalkIos.downloadUrl);
      });
  }, []);

  // useEffect(() => {
  //   console.log(downloadObj);
  // }, [downloadObj]);

  const onClick = () => {
    if (appMarket === CONSTANTS.googlePlay && downText === SSAM.talkName)
      window.open(ssamAndroidLink, "_blank");
    else if (appMarket === CONSTANTS.appStore && downText === SSAM.talkName)
      window.open(ssamIosLink, "_blank");
    else if (appMarket === CONSTANTS.googlePlay && downText === RANG.talkName)
      window.open(schoolAndroidLink, "_blank");
    else if (appMarket === CONSTANTS.appStore && downText === RANG.talkName)
      window.open(schoolIosLink, "_blank");
    // if (appMarket === "google") window.open("", "_blank");
    // else if (appMarket === "IOS") window.open("", "_balnk");
  };

  return (
    <DownloadBtnStyle onClick={onClick}>
      <CardMedia
        component="img"
        image={appMarket}
        alt="logoImg"
        sx={{ width: "auto" }}
      />
    </DownloadBtnStyle>
  );
};

export default MarketDownloadBtn;
