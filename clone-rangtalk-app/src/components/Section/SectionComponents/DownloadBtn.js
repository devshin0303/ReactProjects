import styled from "@emotion/styled";
import { Button, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";

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

const DownloadBtn = ({ appMarket }) => {
  const [androidLink, setAndroidLink] = useState([]);
  const [iosLink, setIosLink] = useState([]);
  // const [downloadObj, setDownloadObj] = useState();

  useEffect(() => {
    fetch(`https://t-api.rangtalk.com/common/v1/binary`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);

        // setDownloadObj(json);
        setAndroidLink(json.rangtalkAndroid.downloadUrl);
        setIosLink(json.samrangtalkIos.downloadUrl);
      });
  }, []);

  // useEffect(() => {
  //   console.log(downloadObj);
  // }, [downloadObj]);

  const onClick = () => {
    if (appMarket === "img/img_btn_logo_google/img_google.png")
      window.open(androidLink, "_blank");
    else if (appMarket === "img/img_btn_logo_apple/img_apple.png")
      window.open(iosLink, "_blank");
    // if (appMarket === "google") window.open("", "_blank");
    // else if (appMarket === "IOS") window.open("", "_balnk");
  };

  return (
    <DownloadBtnStyle onClick={onClick}>
      <CardMedia
        component="img"
        image={appMarket}
        alt="logoImg"
        sx={{ width: "100px" }}
      ></CardMedia>
    </DownloadBtnStyle>
  );
};

export default DownloadBtn;
