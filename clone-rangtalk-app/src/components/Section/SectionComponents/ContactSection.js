import {
  CardMedia,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, fontSize } from "@mui/system";
import React from "react";
import "../../../styles/font.css";
import { ContactNumImg } from "./ContactSectionComponents/ContactNumImg";
import { TextBox } from "./ContactSectionComponents/TextBox";

const ContactSection = ({ contactImg, btnColor }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      id="supportSection"
      sx={{
        backgroundColor: "#ffffff",
        pt: 10,
        pb: 10,
        width: "100%",
        height: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontSize="20px"
          fontWeight="500"
          fontFamily="Noto Sans KR"
          sx={matches ? { fontSize: "20px" } : { fontSize: "16px" }}
        >
          랑톡에 대해
          <Typography
            variant="span"
            color="rgb(113, 165, 217)"
            fontWeight="bold"
            fontFamily="Noto Sans KR"
          >
            궁금한점
          </Typography>
          이 있으신가요?
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h2"
            fontWeight="bold"
            fontFamily="Noto Sans KR"
            component="div"
            sx={matches ? { fontSize: "60px" } : { fontSize: "32px" }}
          >
            CONTACT US
          </Typography>
          <ContactNumImg contactImg={contactImg} />
        </Box>
        <TextBox btnColor={btnColor} />
        <Box
          sx={
            matches
              ? {
                  display: "none",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 5,
                }
          }
        >
          <CardMedia
            component="img"
            image={contactImg}
            sx={{ width: 25, height: 25 }}
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h5"
              component="div"
              fontSize="14px"
              color="#a87cff"
              fontFamily="Noto Sans KR"
              mr={3}
              pt={0.5}
            >
              아이랑톡 고객센터
            </Typography>
            <Typography
              variant="h5"
              component="div"
              fontSize="20px"
              fontWeight="600"
              color="#404040"
              fontFamily="Noto Sans KR"
              noWrap={true}
            >
              010-0000-0000
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h5"
              component="div"
              fontSize="14px"
              color="#5e97d0"
              fontFamily="Noto Sans KR"
              mr={3}
              pt={0.5}
            >
              쌤이랑톡 고객센터
            </Typography>
            <Typography
              variant="h5"
              component="div"
              fontSize="20px"
              fontWeight="600"
              color="#404040"
              fontFamily="Noto Sans KR"
              noWrap={true}
            >
              010-0000-0000
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h5"
              component="div"
              fontSize="14px"
              color="#33aba1"
              fontFamily="Noto Sans KR"
              mr={3}
              pt={0.5}
            >
              학교랑톡 고객센터
            </Typography>
            <Typography
              variant="h5"
              component="div"
              fontSize="20px"
              fontWeight="600"
              color="#404040"
              fontFamily="Noto Sans KR"
              noWrap={true}
            >
              010-0000-0000
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
