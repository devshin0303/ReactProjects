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

export const FaqAccordion = ({ plusImg, mainColor, minusImg }) => {
  const matches = useMediaQuery("(min-width:600px)");

  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <>
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
                01.
              </Typography>
              통화 요금이 궁금합니다.
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
              학교랑톡 통화 요금은 아래와 같습니다. (VAT 포함)
              <br />
              ㅁ 이너텔 C-type형
              <br />
              시내 : 42.9원/3분
              <br />
              시외 : 42.9원3분(30km 미만), 15.95원/10초(30km 이상)
              <br />
              이동전화 : 15.95원/10초
              <br />
              ㅁ 기업인터넷전화 Centrex형
              <br />
              시내/시외 : 41.6원/3분(5년 약정시)
              <br />
              이동전화 : 13.6원/10초(5년 약정시)
              <br />
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
              KT 통신사가 아니여도 사용 가능한가요?
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
              학교랑톡은 통신사, 단말 OS 상관없이 모두 이용이 가능합니다.
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
              로그인 비밀번호를 모르겠어요.
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
                화면 중앙에 있는 '비밀번호를 잊으셨나요?' 선택 시, 비밀번호
                변경이 가능합니다. 새 비밀번호 설정 시, 휴대폰 인증이
                필요합니다.
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
              근무시간 설정은 어떻게 하나요?
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
                [내정보 -&gt; 설정 &gt;- 통화가능시간 -&gt; 업무중 -&gt;
                업무시간 설정 ] 을 통해 근무시간 설정이 가능합니다.
                <br /> 통화가능시간은 평일 반복/매일 반복/요일별 설정이
                가능합니다.
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
              휴가 기간 설정은 어떻게 하나요?
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
                [설정 -&gt; 통화가능시간 -&gt; 휴가중 -&gt; 휴가기간 설정 ] 을
                통해 휴가기간 설정이 가능합니다. 휴가 기간 중, 전화 수신 ON/OFF
                기능도 지원합니다.
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
              학부모/학생도 앱을 설치해야만 선생님과 통화가 가능한가요?
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
                학부모/학생이 앱을 설치하지 않아도, 선생님께서 부여 받으신 랑톡
                유선번호로 착신/발신 가능합니다.
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
              통화 녹음은 어떻게 사용하나요?
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
                Android) [설정 -&gt; 통화녹음 -&gt; 자동녹음] ON 설정 시,
                자동으로 통화 녹음이 가능합니다.
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
              통화 녹음한 파일은 어디에서 확인 할 수 있나요?
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
                학교랑톡 앱의 통화 녹음 파일은 개인 휴대폰 단말기에 저장됩니다.
                Android) [내 파일 -&gt; 내장 메모리 -&gt; 랑톡 ] 에서 통화 녹음
                파일을 확인 할 수 있습니다.
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
              학부모/학생 연락처 추가는 어떻게 하나요?
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
                [연락처 -&gt; 연락처 추가] 에서 정보 입력 후 저장하여 추가
                가능합니다.
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
              연락처 검색은 어떻게 하나요?
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
                연락처 매뉴에서 검색 혹은 통화 다이얼 화면에서 연락처 검색
                기능을 통해 검색 가능합니다.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};
