import React from "react";
import LetterButton from "./LetterButton";
import { Grid } from "@mui/material";
import { lettersArr } from "./Letters";

const Keyboard = ({ game, setGame }) => {
  const handleLetterClick = (letter) => {
    if (!game.guesses.includes(letter)) {
      let newGuesses = game.guesses;
      newGuesses.push(letter);
      setGame((oldGame) => ({ ...oldGame, guesses: newGuesses }));
    } //else do nothing
  };
  return (
    <Grid item>
      {lettersArr.map((letter, index) => (
        <LetterButton
          key={index}
          letter={letter}
          isActive={!game.guesses.includes(letter)}
          onClick={() => handleLetterClick(letter)}
        />
      ))}
    </Grid>
  );
};

export default Keyboard;
