import React from "react";
import {
  SelectGameWrapper,
  SelectGameHeader,
  Break,
  ButtonContainer,
  SingleButton,
  Circle,
  Square,
} from "./SelectGameElements";
import { Link } from "react-router-dom";

export const TicTacToeSelect = () => {
  return (
    <SelectGameWrapper>
      <SelectGameHeader>Select Game</SelectGameHeader>
      <Break />
      <ButtonContainer>
        <Link to="vsai">
          <SingleButton>
            <Circle
              backgr={"#f3501d"}
              borderStyling={"1px solid #ff8a00"}
            ></Circle>
            <Square backgr={"#f3501d"} borderStyling={"2px solid #ffa800"}>
              vs Ai
            </Square>
          </SingleButton>
        </Link>
        <Link to="twoplayers">
          <SingleButton>
            <Circle
              backgr={"#eb00ff"}
              borderStyling={"1px solid #ff00a8"}
            ></Circle>
            <Square backgr={"#7213eb"} borderStyling={"2px solid #eb00ff"}>
              Two Players
            </Square>
          </SingleButton>
        </Link>
      </ButtonContainer>
    </SelectGameWrapper>
  );
};
