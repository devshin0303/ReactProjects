import { Box, CardMedia, Typography, useMediaQuery } from "@mui/material";
import React from "react";

export const ContactNumImg = ({ contactImg }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={
        matches
          ? { display: "flex", justifyContent: "flex-start" }
          : { display: "none" }
      }
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <CardMedia
          component="img"
          image={contactImg}
          sx={{ width: "50px", height: "50px", marginRight: 3 }}
        />
        <Box borderRight="2px solid #707070" pr={3}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            fontSize="16px"
            color="#a87cff"
            fontFamily="Noto Sans KR"
          >
            아이랑톡 고객센터
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            mb={0}
            fontSize="20px"
            fontWeight="600"
            lineHeight="1.57"
            color="#404040"
            fontFamily="Noto Sans KR"
            noWrap={true}
          >
            010-0000-0000
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <CardMedia
          component="img"
          image={contactImg}
          sx={{ width: 50, height: 50, marginRight: 3, marginLeft: 3 }}
        />
        <Box borderRight="2px solid #707070" pr={3}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            fontSize="16px"
            color="#5e97d0"
            fontFamily="Noto Sans KR"
          >
            쌤이랑톡 고객센터
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            mb={0}
            fontSize="20px"
            fontWeight="600"
            lineHeight="1.57"
            color="#404040"
            fontFamily="Noto Sans KR"
            noWrap={true}
          >
            010-0000-0000
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <CardMedia
          component="img"
          image={contactImg}
          sx={{ width: 50, height: 50, marginRight: 3, marginLeft: 3 }}
        />
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            fontSize="16px"
            color="#5fc6be"
            fontFamily="Noto Sans KR"
          >
            학교랑톡 고객센터
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            mb={0}
            fontSize="20px"
            fontWeight="400"
            lineHeight="1.57"
            color="#404040"
            fontFamily="Noto Sans KR"
            noWrap={true}
          >
            010-0000-0000
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
