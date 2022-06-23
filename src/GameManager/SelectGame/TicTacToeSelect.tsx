import React from "react";
import {
  SelectGameWrapper,
  SelectGameHeader,
  Break,
  ButtonContainer,
  SingleButton,
  Circle,
  Square,
  SmallGamePad,
  GameLogo,
} from "./SelectGameElements";
import { Link } from "react-router-dom";
const smallGamePad = require("../../img/smallGamePad.png");
const gamepad = require("../../img/gamepad.png");
const robot = require("../../img/robot.png");

export const TicTacToeSelect = () => {
  return (
    <SelectGameWrapper>
      <SelectGameHeader>Select Game</SelectGameHeader>
      <Break />
      <ButtonContainer>
        <Link to="vsai">
          <SingleButton>
            <Circle backgr={"#f3501d"} borderStyling={"1px solid #ff8a00"}>
              {" "}
              <GameLogo src={robot} alt="logo-png" />
            </Circle>
            <Square backgr={"#f3501d"} borderStyling={"2px solid #ffa800"}>
              vs Ai
            </Square>
          </SingleButton>
        </Link>
        <Link to="twoplayers">
          <SingleButton>
            <Circle backgr={"#eb00ff"} borderStyling={"1px solid #ff00a8"}>
              {" "}
              <GameLogo src={gamepad} alt="logo-png" />
            </Circle>
            <Square backgr={"#7213eb"} borderStyling={"2px solid #eb00ff"}>
              Two Players
            </Square>
          </SingleButton>
        </Link>
      </ButtonContainer>
      <SmallGamePad src={smallGamePad} alt="smallgamepad-png" />
    </SelectGameWrapper>
  );
};
