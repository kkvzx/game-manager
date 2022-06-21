import React, { useState } from "react";
import { ButtonData } from "./ButtonData";
import { nanoid } from "nanoid";
import { TicTacToeVsAi } from "../../components/TicTacToeAi/MainBoard";
import {
  SelectGameWrapper,
  SelectGameHeader,
  Break,
  ButtonContainer,
  SingleButton,
  Circle,
  Square,
} from "./SelectGameElements";

export const SelectGame = () => {
  const [gameChoose, setGameChoose] = useState(false);

  const gameChooseToogle = () => {
    setGameChoose((prev) => !prev);
  };

  let htmlButtonData = ButtonData.map((singleObj) => {
    return (
      <SingleButton key={nanoid()}>
        <Circle
          backgr={singleObj.backgrCircle}
          borderStyling={singleObj.borderStylingCircle}
        ></Circle>
        <Square
          backgr={singleObj.backgrSquare}
          borderStyling={singleObj.borderStylingSquare}
          onClick={() => gameChooseToogle()}
        >
          {singleObj.value}
        </Square>
      </SingleButton>
    );
  });

  return !gameChoose ? (
    <SelectGameWrapper>
      <SelectGameHeader>Select Game</SelectGameHeader>
      <Break />
      <ButtonContainer>{htmlButtonData}</ButtonContainer>
    </SelectGameWrapper>
  ) : (
    <TicTacToeVsAi gameChooseToogle={gameChooseToogle} />
  );
};
