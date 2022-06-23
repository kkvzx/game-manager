import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ButtonData } from "./ButtonData";
import { nanoid } from "nanoid";
import { TicTacToeVsAi } from "../../components/TicTacToeAi/MainBoard";
import { TicTacToeTwoPlayers } from "../../components/TicTacToe2Players/MainBoard";
import { FunGenerator } from "../../components/Fungenerator";
import { Tenzies } from "../../components/Tenzies";
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
  let htmlButtonData = ButtonData.map((singleObj) => {
    return (
      <Link to={singleObj.path} key={nanoid()}>
        <SingleButton>
          <Circle
            backgr={singleObj.backgrCircle}
            borderStyling={singleObj.borderStylingCircle}
          ></Circle>
          <Square
            backgr={singleObj.backgrSquare}
            borderStyling={singleObj.borderStylingSquare}
          >
            {singleObj.value}
          </Square>
        </SingleButton>
      </Link>
    );
  });

  return (
    <SelectGameWrapper>
      <SelectGameHeader>Select Game</SelectGameHeader>
      <Break />
      <ButtonContainer>{htmlButtonData}</ButtonContainer>
    </SelectGameWrapper>
  );
};
