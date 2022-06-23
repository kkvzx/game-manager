import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GameManager } from "./GameManager";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<GameManager />);
