import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faO } from "@fortawesome/free-solid-svg-icons";
import {
  ScoreboardContainer,
  Player,
  PlayerHeader,
  Scores,
} from "./ScoreboardElements";

interface scoreBoardProps {
  counterOfXO: number[];
}

export const Scoreboard = (props: scoreBoardProps) => {
  return (
    <ScoreboardContainer>
      <Player>
        <PlayerHeader></PlayerHeader>
        <FontAwesomeIcon icon={faX} className="xoSymbol" />
      </Player>
      <Scores>
        {props.counterOfXO[0]}:{props.counterOfXO[1]}
      </Scores>
      <Player>
        <PlayerHeader></PlayerHeader>
        <FontAwesomeIcon icon={faO} className="xoSymbol" />
      </Player>
    </ScoreboardContainer>
  );
};
