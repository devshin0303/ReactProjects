import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqAccordian = ({ firstText, secondText }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ height: "64px", padding: "18px 0" }}
      >
        <Typography fontFamily="Noto Sans KR">{firstText}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component="pre" variant="body1" padding="20px 0">
          {secondText}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordian;
