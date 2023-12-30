import React from "react";
import LetterButton from "./LetterButton";
import { Grid } from "@mui/material";

const Keyboard = () => {
  return (
    <Grid item>
      {lettersArr.map((item, index) => (
        <LetterButton key={index} letter={item} isActive={true} />
      ))}
    </Grid>
  );
};

const lettersArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export default Keyboard;
