import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import useColorTheme from "../Contexts/Theme/useColorTheme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const Navbar = () => {
  const { colorTheme, setColorTheme } = useColorTheme();
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"80px"}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
      }}
      paddingX={4}
    >
      <Typography variant="h5" fontWeight={600}>
        Hangman
      </Typography>
      <Grid item>
        <Tooltip title="Change theme">
          <IconButton
            onClick={() => {
              setColorTheme((oldTheme) =>
                oldTheme == "light" ? "dark" : "light"
              );
            }}
          >
            {colorTheme == "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default Navbar;
