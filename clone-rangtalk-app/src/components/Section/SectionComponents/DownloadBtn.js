import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

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
        setIosLink(json.rangtalkIos.downloadUrl);
      });
  }, []);

  // useEffect(() => {
  //   console.log(downloadObj);
  // }, [downloadObj]);

  const onClick = () => {
    if (appMarket === "google") window.open(androidLink, "_blank");
    else if (appMarket === "IOS") window.open(iosLink, "_blank");
    // if (appMarket === "google") window.open("", "_blank");
    // else if (appMarket === "IOS") window.open("", "_balnk");
  };

  return <Button onClick={onClick}>{appMarket}</Button>;
};

export default DownloadBtn;
