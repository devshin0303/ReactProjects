import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import "../../../../styles/font.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

export const FaqAccordion = ({
  plusImg,
  mainColor,
  minusImg,
  sum,
  num,
  details,
}) => {
  const matches = useMediaQuery("(min-width:600px)");

  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box>
        <Accordion
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <AccordionSummary
            onClick={onClick}
            expandIcon={
              // <ExpandMoreIcon>
              <CardMedia
                component="img"
                image={open ? minusImg : plusImg}
                alt="logoImg"
                sx={{ width: "auto" }}
              />
              // </ExpandMoreIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={
              matches
                ? {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row-reverse",
                  }
                : {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row",
                  }
            }
          >
            <Typography
              sx={
                open
                  ? {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: 3,
                    }
                  : {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      marginLeft: 3,
                    }
              }
            >
              <Typography
                component="span"
                sx={
                  open
                    ? {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: mainColor,
                      }
                    : {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        color: mainColor,
                      }
                }
              >
                {num}
              </Typography>
              &nbsp;{sum}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="pre"
              variant="body1"
              padding="15px 0"
              fontFamily="Noto Sans KR"
              color="#4a4a4a"
              fontSize="14px"
              sx={{ padding: "18px", whiteSpace: "pre-wrap" }}
            >
              {details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* <Box>
        <Accordion
          onClick={onClick}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <AccordionSummary
            expandIcon={
              // <ExpandMoreIcon>
              <CardMedia
                component="img"
                image={open ? minusImg : plusImg}
                alt="logoImg"
                sx={{ width: "auto" }}
              />
              // </ExpandMoreIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={
              matches
                ? {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row-reverse",
                  }
                : {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row",
                  }
            }
          >
            <Typography
              sx={
                open
                  ? {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: 3,
                    }
                  : {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      marginLeft: 3,
                    }
              }
            >
              <Typography
                className="faq2"
                component="span"
                sx={
                  open
                    ? {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: mainColor,
                      }
                    : {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        color: mainColor,
                      }
                }
              >
                02.
              </Typography>
              KT ???????????? ???????????? ?????? ????????????????
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            expandIcon={<ExpandMoreIcon sx={{ marginRight: 4 }} />}
          >
            <Typography
              component="pre"
              variant="body1"
              padding="20px 0"
              fontFamily="Noto Sans KR"
              color="#4a4a4a"
              fontSize="14px"
              sx={{ padding: "18px" }}
            >
              ??????????????? ?????????, ?????? OS ???????????? ?????? ????????? ???????????????.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Accordion
          onClick={onClick}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <AccordionSummary
            expandIcon={
              // <ExpandMoreIcon>
              <CardMedia
                component="img"
                image={open ? minusImg : plusImg}
                alt="logoImg"
                sx={{ width: "auto" }}
              />
              // </ExpandMoreIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={
              matches
                ? {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row-reverse",
                  }
                : {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row",
                  }
            }
          >
            <Typography
              sx={
                open
                  ? {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: 3,
                    }
                  : {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      marginLeft: 3,
                    }
              }
            >
              <Typography
                component="span"
                className="faq3"
                sx={
                  open
                    ? {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: mainColor,
                      }
                    : {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        color: mainColor,
                      }
                }
              >
                03.
              </Typography>
              ????????? ??????????????? ???????????????.
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            expandIcon={<ExpandMoreIcon sx={{ marginRight: 4 }} />}
          >
            <Box>
              <Typography
                component="pre"
                variant="body1"
                padding="20px 0"
                fontFamily="Noto Sans KR"
                color="#4a4a4a"
                fontSize="14px"
                sx={{
                  padding: "18px",
                  width: "100%",
                }}
                noWrap={true}
              >
                ?????? ????????? ?????? '??????????????? ????????????????' ?????? ???, ????????????
                ????????? ???????????????. ??? ???????????? ?????? ???, ????????? ?????????
                ???????????????.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Accordion
          onClick={onClick}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <AccordionSummary
            expandIcon={
              // <ExpandMoreIcon>
              <CardMedia
                component="img"
                image={open ? minusImg : plusImg}
                alt="logoImg"
                sx={{ width: "auto" }}
              />
              // </ExpandMoreIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={
              matches
                ? {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row-reverse",
                  }
                : {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row",
                  }
            }
          >
            <Typography
              sx={
                open
                  ? {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: 3,
                    }
                  : {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      marginLeft: 3,
                    }
              }
            >
              <Typography
                component="span"
                className="faq4"
                sx={
                  open
                    ? {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: mainColor,
                      }
                    : {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        color: mainColor,
                      }
                }
              >
                04.
              </Typography>
              ???????????? ????????? ????????? ??????????
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            expandIcon={<ExpandMoreIcon sx={{ marginRight: 4 }} />}
          >
            <Box>
              <Typography
                component="pre"
                variant="body1"
                padding="20px 0"
                fontFamily="Noto Sans KR"
                color="#4a4a4a"
                fontSize="14px"
                sx={{
                  padding: "18px",
                  width: "100%",
                }}
                noWrap={true}
              >
                [????????? -&gt; ?????? &gt;- ?????????????????? -&gt; ????????? -&gt;
                ???????????? ?????? ] ??? ?????? ???????????? ????????? ???????????????.
                <br /> ????????????????????? ?????? ??????/?????? ??????/????????? ?????????
                ???????????????.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Accordion
          onClick={onClick}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <AccordionSummary
            expandIcon={
              // <ExpandMoreIcon>
              <CardMedia
                component="img"
                image={open ? minusImg : plusImg}
                alt="logoImg"
                sx={{ width: "auto" }}
              />
              // </ExpandMoreIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={
              matches
                ? {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row-reverse",
                  }
                : {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row",
                  }
            }
          >
            <Typography
              sx={
                open
                  ? {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: 3,
                    }
                  : {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      marginLeft: 3,
                    }
              }
            >
              <Typography
                className="faq5"
                component="span"
                sx={
                  open
                    ? {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: mainColor,
                      }
                    : {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        color: mainColor,
                      }
                }
              >
                05.
              </Typography>
              ?????? ?????? ????????? ????????? ??????????
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            expandIcon={<ExpandMoreIcon sx={{ marginRight: 4 }} />}
          >
            <Box>
              <Typography
                component="pre"
                variant="body1"
                padding="20px 0"
                fontFamily="Noto Sans KR"
                color="#4a4a4a"
                fontSize="14px"
                sx={{
                  padding: "18px",
                  width: "100%",
                }}
                noWrap={true}
              >
                [?????? -&gt; ?????????????????? -&gt; ????????? -&gt; ???????????? ?????? ] ???
                ?????? ???????????? ????????? ???????????????. ?????? ?????? ???, ?????? ?????? ON/OFF
                ????????? ???????????????.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Accordion
          onClick={onClick}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <AccordionSummary
            expandIcon={
              // <ExpandMoreIcon>
              <CardMedia
                component="img"
                image={open ? minusImg : plusImg}
                alt="logoImg"
                sx={{ width: "auto" }}
              />
              // </ExpandMoreIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={
              matches
                ? {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row-reverse",
                  }
                : {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row",
                  }
            }
          >
            <Typography
              sx={
                open
                  ? {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: 3,
                    }
                  : {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      marginLeft: 3,
                    }
              }
            >
              <Typography
                className="faq6"
                component="span"
                sx={
                  open
                    ? {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: mainColor,
                      }
                    : {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        color: mainColor,
                      }
                }
              >
                06.
              </Typography>
              ?????????/????????? ?????? ??????????????? ???????????? ????????? ????????????????
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            expandIcon={<ExpandMoreIcon sx={{ marginRight: 4 }} />}
          >
            <Box>
              <Typography
                component="pre"
                variant="body1"
                padding="20px 0"
                fontFamily="Noto Sans KR"
                color="#4a4a4a"
                fontSize="14px"
                sx={{
                  padding: "18px",
                  width: "100%",
                }}
                noWrap={true}
              >
                ?????????/????????? ?????? ???????????? ?????????, ??????????????? ?????? ????????? ??????
                ??????????????? ??????/?????? ???????????????.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Accordion
          onClick={onClick}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <AccordionSummary
            expandIcon={
              // <ExpandMoreIcon>
              <CardMedia
                component="img"
                image={open ? minusImg : plusImg}
                alt="logoImg"
                sx={{ width: "auto" }}
              />
              // </ExpandMoreIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={
              matches
                ? {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row-reverse",
                  }
                : {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row",
                  }
            }
          >
            <Typography
              sx={
                open
                  ? {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: 3,
                    }
                  : {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      marginLeft: 3,
                    }
              }
            >
              <Typography
                className="faq7"
                component="span"
                sx={
                  open
                    ? {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: mainColor,
                      }
                    : {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        color: mainColor,
                      }
                }
              >
                07.
              </Typography>
              ?????? ????????? ????????? ????????????????
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            expandIcon={<ExpandMoreIcon sx={{ marginRight: 4 }} />}
          >
            <Box>
              <Typography
                component="pre"
                variant="body1"
                padding="20px 0"
                fontFamily="Noto Sans KR"
                color="#4a4a4a"
                fontSize="14px"
                sx={{
                  padding: "18px",
                  width: "100%",
                }}
                noWrap={true}
              >
                Android) [?????? -&gt; ???????????? -&gt; ????????????] ON ?????? ???,
                ???????????? ?????? ????????? ???????????????.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Accordion
          onClick={onClick}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <AccordionSummary
            expandIcon={
              // <ExpandMoreIcon>
              <CardMedia
                component="img"
                image={open ? minusImg : plusImg}
                alt="logoImg"
                sx={{ width: "auto" }}
              />
              // </ExpandMoreIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={
              matches
                ? {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row-reverse",
                  }
                : {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row",
                  }
            }
          >
            <Typography
              sx={
                open
                  ? {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: 3,
                    }
                  : {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      marginLeft: 3,
                    }
              }
            >
              <Typography
                component="span"
                className="faq8"
                sx={
                  open
                    ? {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: mainColor,
                      }
                    : {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        color: mainColor,
                      }
                }
              >
                08.
              </Typography>
              ?????? ????????? ????????? ???????????? ?????? ??? ??? ??????????
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            expandIcon={<ExpandMoreIcon sx={{ marginRight: 4 }} />}
          >
            <Box>
              <Typography
                component="pre"
                variant="body1"
                padding="20px 0"
                fontFamily="Noto Sans KR"
                color="#4a4a4a"
                fontSize="14px"
                sx={{
                  padding: "18px",
                  width: "100%",
                }}
                noWrap={true}
              >
                ???????????? ?????? ?????? ?????? ????????? ?????? ????????? ???????????? ???????????????.
                Android) [??? ?????? -&gt; ?????? ????????? -&gt; ?????? ] ?????? ?????? ??????
                ????????? ?????? ??? ??? ????????????.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Accordion
          onClick={onClick}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <AccordionSummary
            expandIcon={
              // <ExpandMoreIcon>
              <CardMedia
                component="img"
                image={open ? minusImg : plusImg}
                alt="logoImg"
                sx={{ width: "auto" }}
              />
              // </ExpandMoreIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={
              matches
                ? {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row-reverse",
                  }
                : {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row",
                  }
            }
          >
            <Typography
              sx={
                open
                  ? {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: 3,
                    }
                  : {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      marginLeft: 3,
                    }
              }
            >
              <Typography
                component="span"
                className="faq9"
                sx={
                  open
                    ? {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: mainColor,
                      }
                    : {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        color: mainColor,
                      }
                }
              >
                09.
              </Typography>
              ?????????/?????? ????????? ????????? ????????? ??????????
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            expandIcon={<ExpandMoreIcon sx={{ marginRight: 4 }} />}
          >
            <Box>
              <Typography
                component="pre"
                variant="body1"
                padding="20px 0"
                fontFamily="Noto Sans KR"
                color="#4a4a4a"
                fontSize="14px"
                sx={{
                  padding: "18px",
                  width: "100%",
                }}
                noWrap={true}
              >
                [????????? -&gt; ????????? ??????] ?????? ?????? ?????? ??? ???????????? ??????
                ???????????????.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Accordion
          onClick={onClick}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <AccordionSummary
            expandIcon={
              // <ExpandMoreIcon>
              <CardMedia
                component="img"
                image={open ? minusImg : plusImg}
                alt="logoImg"
                sx={{ width: "auto" }}
              />
              // </ExpandMoreIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={
              matches
                ? {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row-reverse",
                  }
                : {
                    height: "64px",
                    padding: "18px 0",
                    flexDirection: "row",
                  }
            }
          >
            <Typography
              sx={
                open
                  ? {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: 3,
                    }
                  : {
                      fontFamily: "Noto Sans KR",
                      fontSize: "18px",
                      marginLeft: 3,
                    }
              }
            >
              <Typography
                component="span"
                className="faq10"
                sx={
                  open
                    ? {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: mainColor,
                      }
                    : {
                        fontFamily: "Noto Sans KR",
                        fontSize: "18px",
                        color: mainColor,
                      }
                }
              >
                10.
              </Typography>
              ????????? ????????? ????????? ??????????
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            expandIcon={<ExpandMoreIcon sx={{ marginRight: 4 }} />}
          >
            <Box>
              <Typography
                component="pre"
                variant="body1"
                padding="20px 0"
                fontFamily="Noto Sans KR"
                color="#4a4a4a"
                fontSize="14px"
                sx={{
                  padding: "18px",
                  width: "100%",
                }}
                noWrap={true}
              >
                ????????? ???????????? ?????? ?????? ?????? ????????? ???????????? ????????? ??????
                ????????? ?????? ?????? ???????????????.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box> */}
    </>
  );
};
