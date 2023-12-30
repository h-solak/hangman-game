import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Drawing.module.css";
import useColorTheme from "../../../../Contexts/Theme/useColorTheme";
const Drawing = ({ game }) => {
  const [wrongGuessCount, setWrongGuessCount] = useState(0);

  const calculateWrongGuessCount = () => {
    if (game.guesses) {
      let newCount = 0;
      game.guesses.map((letter) => {
        if (!game.word.split("").includes(letter)) {
          newCount += 1;
        }
        setWrongGuessCount(newCount);
      });
    }
  };
  useEffect(() => {
    calculateWrongGuessCount();
  }, [game]);
  const { colorTheme } = useColorTheme();
  const drawingColor = colorTheme === "light" ? "#000" : "#fff";
  const sx = {
    backgroundColor: drawingColor,
  };
  const headSx = {
    borderColor: drawingColor,
  };
  return (
    <Grid item xs={12} md={6} className={styles.container}>
      {/* Body */}
      {wrongGuessCount >= 4 && (
        <>
          <Box className={styles.rope} sx={sx}></Box>
          <Box className={styles.head} sx={headSx}></Box>
        </>
      )}
      {wrongGuessCount >= 5 && (
        <Box className={styles.bodyCenter} sx={sx}></Box>
      )}
      {wrongGuessCount >= 6 && <Box className={styles.leftArm} sx={sx}></Box>}
      {wrongGuessCount >= 7 && <Box className={styles.rightArm} sx={sx}></Box>}
      {wrongGuessCount >= 8 && <Box className={styles.leftLeg} sx={sx}></Box>}
      {wrongGuessCount >= 9 && <Box className={styles.rightLeg} sx={sx}></Box>}

      {/* Gibbet */}
      <Box>
        {wrongGuessCount >= 3 && (
          <Box className={styles.gibbetTop} sx={sx}></Box>
        )}
        {wrongGuessCount >= 2 && (
          <Box className={styles.gibbetCenter} sx={sx}></Box>
        )}

        {wrongGuessCount >= 1 && (
          <>
            <Box className={styles.gibbetBottomLeft} sx={sx}></Box>
            <Box className={styles.gibbetBottomRight} sx={sx}></Box>
          </>
        )}
      </Box>

      {/* <Button
        variant="contained"
        onClick={() => setWrongGuessCount((old) => old + 1)}
      >
        + Wrong
      </Button> */}
    </Grid>
  );
};

export default Drawing;

// <Typography
//         fontSize={60}
//         fontWeight={600}
//         sx={{
//           marginBottom: -6,
//         }}
//       >
//         O
//       </Typography>
//       <Box
//         display={"flex"}
//         alignItems={"center"}
//         justifyContent={"center"}
//         sx={{
//           marginBottom: -8,
//         }}
//       >
//         <Typography fontSize={60} fontWeight={600}>
//           /
//         </Typography>
//         <Typography fontSize={60} fontWeight={600}>
//           I
//         </Typography>
//         <Typography fontSize={60} fontWeight={600}>
//           \
//         </Typography>
//       </Box>
//       <Typography fontSize={100}>^</Typography>
