import React from "react";
import { Scoreboard } from "../../TicTacToeAi/Scoreboard";
import {
  GamePage,
  Summary,
  SummaryHeader,
  NewGameButton,
} from "../../TicTacToeAi/MainBoard/MainBoardElements";
import { Gamingboard } from "../../TicTacToeAi/GamingBoard/Gamingboard";
import { useNavigate } from "react-router-dom";

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

export const TicTacToeTwoPlayers = () => {
  // states
  const [squares, setSquares] = React.useState<boolean[]>(
    new Array(9).fill(null)
  );
  const [counterOfXO, setCounterOfXO] = React.useState([0, 0]);
  const [winner, setWinner] = React.useState<boolean>();
  const [draw, setDraw] = React.useState<boolean>(false);
  const navigate = useNavigate();

  // -------------FUNCTIONS-----------
  // Handle square click
  const handleSquareClick = (index: number): void => {
    const isFirstPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;
    let newSquares = squares;

    if (
      isFirstPlayerTurn &&
      squares[index] != false &&
      typeof winner === "undefined"
    ) {
      newSquares[index] = true;
      setSquares([...newSquares]);
    } else if (
      !isFirstPlayerTurn &&
      squares[index] != true &&
      typeof winner === "undefined"
    ) {
      newSquares[index] = false;
      setSquares([...newSquares]);
    }
  };

  // Moves of computer and checking winning conditions
  React.useEffect(() => {
    const linesThatAre = (a: any, b: any, c: any) => {
      return lines.filter((squareIndexes) => {
        const squareValues = squareIndexes.map((index) => squares[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };

    const firstPlayerWon = linesThatAre(true, true, true).length > 0;
    if (firstPlayerWon) {
      setWinner(true);
    }
    const secondPlayerWon = linesThatAre(false, false, false).length > 0;
    if (secondPlayerWon) {
      setWinner(false);
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
  const backToMenu = () => {
    navigate("/");
  };

  return (
    <GamePage>
      <Scoreboard counterOfXO={counterOfXO}></Scoreboard>
      {(typeof winner != "undefined" || draw == true) && (
        <Summary>
          <SummaryHeader>
            {winner ? "Player X won!" : draw ? "It's a draw" : "Player O won"}
          </SummaryHeader>
          <NewGameButton onClick={() => newGame()}>New Game</NewGameButton>
          <NewGameButton onClick={() => backToMenu()}>
            Back to menu
          </NewGameButton>
        </Summary>
      )}
      <Gamingboard squares={squares} handleSquareClick={handleSquareClick} />
    </GamePage>
  );
};
