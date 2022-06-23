import React, { useState } from "react";
import { App, AppWrapper } from "./GameManagerElements";
import { HomePage } from "./HomePage/index";
import { SelectGame } from "./SelectGame";
import { TicTacToeSelect } from "./SelectGame/TicTacToeSelect";
import { TicTacToeTwoPlayers } from "../components/TicTacToe2Players/MainBoard";
import { Main as Tenzies } from "../components/Tenzies/Main/index";
import { FunGenerator } from "../components/Fungenerator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TicTacToeVsAi } from "../components/TicTacToeAi/MainBoard";

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
              element={<FunGenerator />}
            ></Route>
            <Route path="/selectgame" element={<SelectGame />}></Route>
          </Routes>
        </Router>
      </App>
    </AppWrapper>
  );
};
