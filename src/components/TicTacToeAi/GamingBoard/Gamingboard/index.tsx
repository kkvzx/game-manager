import React from "react";
import { nanoid } from "nanoid";
import { GamingboardWrapper } from "./GamingboardElements";
import { Square } from "../Square";

interface gamingBoardProps {
  squares: boolean[];
  handleSquareClick: (index: number) => void;
}

export const Gamingboard = ({
  squares,
  handleSquareClick,
}: gamingBoardProps) => {
  return (
    <GamingboardWrapper>
      {squares.map((singleSquare, index) => (
        <Square
          key={nanoid()}
          index={index}
          handleSquareClick={handleSquareClick}
          squares={singleSquare}
        />
      ))}
    </GamingboardWrapper>
  );
};
