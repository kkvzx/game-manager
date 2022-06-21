import React, { useState } from "react";
import { App, AppWrapper } from "./GameManagerElements";
import { HomePage } from "./HomePage/index";
import { SelectGame } from "./SelectGame";

export const GameManager = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const gameStartedToggle = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <AppWrapper>
      <App>
        {gameStarted ? (
          <SelectGame />
        ) : (
          <HomePage gameStartedToggle={gameStartedToggle} />
        )}
      </App>
    </AppWrapper>
  );
};
