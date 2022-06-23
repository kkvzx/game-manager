import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ButtonData } from "./ButtonData";
import { nanoid } from "nanoid";
import {
  SelectGameWrapper,
  SelectGameHeader,
  Break,
  ButtonContainer,
  SingleButton,
  Circle,
  Square,
  GameLogo,
  SmallGamePad,
} from "./SelectGameElements";
import { Star } from "../HomePage/HomePageElements";

const logo = [
  require("../../img/robot.png"),
  require("../../img/gamepad.png"),
  require("../../img/trumphet.png"),
  require("../../img/rocket.png"),
];
const smallGamePad = require("../../img/smallGamePad.png");

export const SelectGame = () => {
  let htmlButtonData = ButtonData.map((singleObj, index) => {
    return (
      <Link to={singleObj.path} key={nanoid()}>
        <SingleButton>
          <Circle
            backgr={singleObj.backgrCircle}
            borderStyling={singleObj.borderStylingCircle}
          >
            <GameLogo src={logo[index]} alt="logo-png" />
          </Circle>
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
      <SmallGamePad src={smallGamePad} alt="smallgamepad-png" />
    </SelectGameWrapper>
  );
};
