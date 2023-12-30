import { Button } from "@mui/material";
import React from "react";
import useColorTheme from "../../../../Contexts/Theme/useColorTheme";

const LetterButton = ({ letter, isActive, onClick }) => {
  const { colorTheme, setColorTheme } = useColorTheme();
  const isLightTheme = colorTheme === "light";
  return (
    <Button
      variant="contained"
      sx={{
        margin: 1,
        paddingX: 0,
        backgroundColor: "transparent",
        border: 3,
        borderColor: isLightTheme ? "#000" : "#fff",
        borderRadius: 0,
        color: isLightTheme ? "#000" : "#fff",
        fontWeight: 600,
        fontSize: 16,
        opacity: isActive ? 1 : 0.4,
        "&:hover": {
          backgroundColor: isLightTheme ? "#00000010" : "#00000030",
        },
      }}
      onClick={onClick}
      disabled={!isActive}
    >
      {letter}
    </Button>
  );
};

export default LetterButton;
