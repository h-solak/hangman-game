import { Grid, Typography } from "@mui/material";
import React from "react";

const Word = ({ game }) => {
  return (
    <Grid item xs={12} md={6}>
      <Grid container display={"flex"} gap={4}>
        {game.word.split("").map((letter, index) => (
          <Grid
            item
            key={index}
            paddingX={1}
            sx={{
              borderBottom: 4,
              textAlign: "center",
            }}
            width={32}
          >
            {game.guesses.includes(letter) ? (
              <Typography fontSize={24} textTransform={"capitalize"}>
                {letter}
              </Typography>
            ) : (
              <Typography
                fontSize={24}
                textTransform={"capitalize"}
                sx={{
                  opacity: 0,
                }}
              >
                "A"
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Word;
