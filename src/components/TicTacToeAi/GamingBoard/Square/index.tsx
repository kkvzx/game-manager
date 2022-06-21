import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faO } from "@fortawesome/free-solid-svg-icons";
import { SingleButton, XoSymbol } from "./SquareElements";

interface SquareProps {
  index: number;
  handleSquareClick: (index: number) => void;
  squares: boolean;
}

export const Square = ({ index, handleSquareClick, squares }: SquareProps) => {
  return (
    <SingleButton onClick={() => handleSquareClick(index)} squares={squares}>
      <XoSymbol>
        {squares ? (
          <FontAwesomeIcon icon={faX} />
        ) : squares === null ? (
          ""
        ) : (
          <FontAwesomeIcon icon={faO} />
        )}
      </XoSymbol>
    </SingleButton>
  );
};
