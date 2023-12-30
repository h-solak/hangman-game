import React, { useEffect, useState } from "react";
import useColorTheme from "../../Contexts/Theme/useColorTheme";
import { Box, Button, Grid, Typography } from "@mui/material";
import Layout from "../../Layout/Layout";
import CardContainer from "../../Components/CardContainer";
import Drawing from "./Components/Drawing";
import Keyboard from "./Components/Keyboard";

const Home = () => {
  const { colorTheme, setColorTheme } = useColorTheme();
  const [gameStep, setGameStep] = useState(0); //0 -> not playing, 1 -> game started, 2 -> game finished

  const handleStartGame = () => {
    setGameStep((oldGameStep) => oldGameStep + 1);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && gameStep === 0) {
      console.log("yey");
      handleStartGame();
    }
  };
  useEffect(() => {
    if (gameStep === 0) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      // Cleanup: Remove the event listener when the component unmounts
      document.removeEventListener("keydown", handleKeyPress);
    }
    console.log(gameStep);
  }, [gameStep]);

  return (
    <Layout>
      {gameStep === 0 ? (
        <CardContainer
          className="absolute-center"
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          padding={4}
          sx={{
            borderRadius: 4,
            maxWidth: 360,
            textAlign: "center",
          }}
        >
          {/* <Typography variant="h6" fontWeight={600}>
            Welcome to Hangman!{" "}
          </Typography> */}
          <div className="glitch-wrapper">
            <div className="glitch" data-text="Welcome to Hangman!">
              Welcome to Hangman!
            </div>
          </div>
          <Typography color={"text.secondary"} className="blinking-text">
            Click on the button to start your journey.
          </Typography>
          <Button
            onClick={handleStartGame}
            variant="contained"
            color="highlight"
            sx={{
              color: "#fff",
            }}
            fullWidth
          >
            PLAY
          </Button>
        </CardContainer>
      ) : gameStep === 1 ? (
        <Grid container>
          <Drawing wrongGuessCount={10} />
          <Keyboard />
        </Grid>
      ) : gameStep === 2 ? (
        <Box>Blaaaa</Box>
      ) : (
        <Box>Something went wrong.</Box>
      )}
    </Layout>
  );
};

export default Home;
