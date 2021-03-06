import {
  CardMedia,
  Container,
  Hidden,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, color } from "@mui/system";
import React, { useState } from "react";
import "../../../styles/font.css";
import PropTypes from "prop-types";
import DownloadSectionTopBtn from "./DownloadSectionComponents/DownloadSectionTopBtn";
import MarketDownloadBtn from "./DownloadSectionComponents/MarketDownloadBtn";
import { CONSTANTS } from "../../../constants/Constants";
import { ManualBtn } from "./DownloadSectionComponents/ManualBtn";
import { RANG } from "../../../constants/rang";

const DownloadSection = ({
  downBackImg,
  downMobileImg,
  downTopBtnName,
  downTxtColor,
  downTalkImg,
  downManualColor,
  downText,
  setDownloadCat,
}) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      id="downloadSection"
      sx={
        matches
          ? {
              backgroundImage: `url(${downBackImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: 1000,
              backgroundColor: "#f2f2f2",
            }
          : {
              backgroundImage: "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "#f2f2f2",
            }
      }
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "flex-start" }}
      >
        <Box
          sx={matches ? { paddingTop: 16 } : { paddingTop: 2 }}
          width="600px"
          height="auto"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            sx={matches ? { marginBottom: 15 } : { marginBottom: 5 }}
          >
            <DownloadSectionTopBtn
              downTopBtnName={downTopBtnName}
              setDownloadCat={setDownloadCat}
            />
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            c
          >
            <Typography
              fontFamily="Noto Sans KR"
              noWrap={true}
              sx={matches ? { fontSize: "56px" } : { fontSize: "30px" }}
              // fontSize="56px"
              color={downTxtColor}
              fontWeight="bold"
            >
              {downText}
            </Typography>
            <Box>
              <CardMedia
                className="balloon-1"
                component="img"
                sx={
                  matches
                    ? { width: "51px", height: "50px" }
                    : { width: "36px", height: "37px", marginLeft: 2 }
                }
                image={downTalkImg}
                alt="logoImg"
              />
            </Box>
          </Box>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            pb={2}
            m={0}
            fontFamily="Noto Sans KR"
            noWrap={true}
            sx={matches ? { fontSize: "20px" } : { fontSize: "14px" }}
          >
            ????????? ???????????? ?????? ????????? ?????????
            <br />
            ?????????????????????.
          </Typography>
          <Hidden smUp>
            <Box>
              <CardMedia
                component="img"
                image={downMobileImg}
                width="100%"
                height="auto"
              />
            </Box>
          </Hidden>
          <Box mt="32px" sx={matches ? {} : { width: "100%" }}>
            <ManualBtn
              downManualColor={downManualColor}
              downTopBtnName={downTopBtnName}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <MarketDownloadBtn
                appMarket={CONSTANTS.googlePlay}
                downText={downText}
              ></MarketDownloadBtn>
              <MarketDownloadBtn
                appMarket={CONSTANTS.appStore}
                downText={downText}
              ></MarketDownloadBtn>
            </Box>
            <Box>
              <Typography
                variant="body1"
                gutterBottom
                component="div"
                pb={2}
                mt={3}
                fontFamily="Noto Sans KR"
                color="#404040"
                noWrap={true}
                fontSize="14px"
                lineHeight="24px"
              >
                * iOS?????? ?????????&gt;??????&gt;?????? ?????? (?????? ???????????? ??? ??????&gt;
                ??????) &gt;
                <br />
                Helixtech Corp. ?????? ????????????&gt;????????? ????????? ??? ??????????????????
                ?????????
                <br />
                ??????????????? ???????????????.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

MarketDownloadBtn.propTypes = {
  appMarket: PropTypes.string.isRequired,
};

export default DownloadSection;
