import {
  Box,
  Button,
  CardMedia,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

export const TextBox = ({ btnColor }) => {
  const [count, setCount] = useState(0);

  const onChange = (event) => {
    setCount(event.target.value.length);
    console.log(event);
  };

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box mt={5}>
      <TextField
        id="standard-search"
        variant="standard"
        label="성함"
        sx={
          matches ? { width: "45%", height: 50 } : { width: "100%", height: 50 }
        }
      />
      <Box
        sx={
          matches
            ? { display: "flex", justifyContent: "space-between", mt: 3 }
            : { mt: 1 }
        }
      >
        <TextField
          id="standard-search"
          variant="standard"
          label="연락처"
          sx={
            matches
              ? { width: "45%", height: 50, marginRight: 8.5 }
              : { width: "100%", height: 50, mt: 1 }
          }
        />
        <TextField
          id="standard-search"
          variant="standard"
          label="이메일"
          sx={
            matches
              ? { width: "45%", height: 50 }
              : { width: "100%", height: 50, mt: 2 }
          }
        />
      </Box>
      <Box sx={{ marginTop: 3, position: "relative" }}>
        <TextField
          id="standard-search"
          multiline
          rows={10}
          placeholder="문의내용을 입력해주세요. (최대 2000자 작성가능)"
          fullWidth
          onChange={onChange}
          inputProps={{ maxLength: 2000 }}
        />
        <Typography position="absolute" sx={{ bottom: 0, right: 0 }}>
          {count}/2000
        </Typography>
      </Box>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <CardMedia
          component="img"
          alt="checkImg"
          src="img/com_check_off/com_check_off.png"
          sx={{ width: "18px", height: "18px" }}
        />
        <Typography fontFamily="Noto Sans KR" color="3e3e3e">
          개인정보 정책에 동의 합니다.
        </Typography>
      </Box>
      <Button
        variant="contained"
        component="span"
        sx={{
          "&:hover": {
            backgroundColor: btnColor,
          },
          textAlign: "center",
          width: "100px",
          backgroundColor: btnColor,
          fontWeight: "bold",
          fontFamily: "Noto Sans KR",
          width: "100%",
          height: "50px",
          marginTop: 3,
        }}
      >
        접수하기
      </Button>
    </Box>
  );
};
