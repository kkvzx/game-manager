import React from "react";
import { Scoreboard } from "../Scoreboard";
import { Gamingboard } from "../GamingBoard/Gamingboard";
import {
  GamePage,
  Summary,
  SummaryHeader,
  NewGameButton,
} from "./MainBoardElements";

// Winning conditions
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const TicTacToeVsAi = (props: { gameChooseToogle: () => void }) => {
  // states
  const [squares, setSquares] = React.useState<boolean[]>(
    new Array(9).fill(null)
  );
  const [counterOfXO, setCounterOfXO] = React.useState([0, 0]);
  const [winner, setWinner] = React.useState<boolean>();
  const [draw, setDraw] = React.useState<boolean>(false);

  // Handle square click
  const handleSquareClick = (index: number): void => {
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;
    if (
      isPlayerTurn &&
      squares[index] != false &&
      typeof winner === "undefined"
    ) {
      let newSquares = squares;
      newSquares[index] = true;
      setSquares([...newSquares]);
    }
  };

  // Moves of computer and checking winning conditions
  React.useEffect(() => {
    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;

    const linesThatAre = (a: any, b: any, c: any) => {
      return lines.filter((squareIndexes) => {
        const squareValues = squareIndexes.map((index) => squares[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };
    const emptyIndexes = squares
      .map((square, index: number) => (square === null ? index : null))
      .filter((object) => object != null);
    const playerWon = linesThatAre(true, true, true).length > 0;
    if (playerWon) {
      setWinner(true);
    }
    const computerWon = linesThatAre(false, false, false).length > 0;
    if (computerWon) {
      setWinner(false);
    }
    const putComputerAt = (index: any) => {
      if (typeof winner === "undefined" && draw === false) {
        let newSquares = squares;
        newSquares[index] = false;
        setSquares([...newSquares]);
      }
    };

    if (isComputerTurn) {
      const winningLines = linesThatAre(false, false, null);
      if (winningLines.length > 0) {
        const winningIndex = winningLines[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(winningIndex);
        return;
      }

      const linesToBlock = linesThatAre(true, true, null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre(false, null, null);
      if (linesToContinue.length > 0) {
        putComputerAt(
          linesToContinue[0].filter((index) => squares[index] === null)[0]
        );
        return;
      }
      const randomIndex =
        emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
      putComputerAt(randomIndex);
    }
    if (squares.filter((singleSquare) => singleSquare === null).length === 0) {
      setDraw(true);
      return;
    }
  }, [squares]);

  React.useEffect(() => {
    if (typeof winner != "undefined") {
      if (winner) {
        setCounterOfXO((prev) => [prev[0] + 1, prev[1]]);
      } else if (!winner) {
        setCounterOfXO((prev) => [prev[0], prev[1] + 1]);
      }
    }
  }, [winner]);

  const newGame = () => {
    setSquares(new Array(9).fill(null));
    setWinner(undefined);
    setDraw(false);
  };

  return (
    <GamePage>
      <Scoreboard counterOfXO={counterOfXO}></Scoreboard>
      {(typeof winner != "undefined" || draw == true) && (
        <Summary>
          <SummaryHeader>
            {winner ? "You've won!" : draw ? "It's a draw" : "Computer won :("}
          </SummaryHeader>
          <NewGameButton onClick={() => newGame()}>New Game</NewGameButton>
          <NewGameButton onClick={() => props.gameChooseToogle()}>
            Back to menu
          </NewGameButton>
        </Summary>
      )}
      <Gamingboard squares={squares} handleSquareClick={handleSquareClick} />
      {/* {(typeof winner != "undefined" || draw == true) && (
        <NewGameButton onClick={() => props.gameChooseToogle()}>
          Back to menu
        </NewGameButton>
      )} */}
    </GamePage>
  );
};
