import { App, AppWrapper } from "./GameManagerElements";
import { HomePage } from "./HomePage/index";
import { SelectGame } from "./SelectGame";
import { TicTacToeSelect } from "./SelectGame/TicTacToeSelect";
import { TicTacToeTwoPlayers } from "../components/TicTacToe/TicTacToe2Players/MainBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TicTacToeVsAi } from "../components/TicTacToe/TicTacToeAi/MainBoard";
import { Tenzies } from "../components/Tenzies/Main";
import { Fungenerator } from "../components/Fungenerator/Main";
import { FlappyBird } from "../components/Fungenerator/FlappyBird/Main";

export const GameManager = () => {
  return (
    <AppWrapper>
      <App>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/selectgame/tictactoe"
              element={<TicTacToeSelect />}
            ></Route>
            <Route
              path="selectgame/tictactoe/vsai"
              element={<TicTacToeVsAi />}
            ></Route>
            <Route
              path="selectgame/tictactoe/twoplayers"
              element={<TicTacToeTwoPlayers />}
            ></Route>

            <Route path="/selectgame/tenzies" element={<Tenzies />}></Route>
            <Route
              path="/selectgame/fungenerator"
              element={<Fungenerator />}
            ></Route>
            <Route path="selectgame/flappybird" element={<FlappyBird />} />
            <Route path="/selectgame" element={<SelectGame />}></Route>
          </Routes>
        </Router>
      </App>
    </AppWrapper>
  );
};
