import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomePageWrapper,
  LogoWrapper,
  StartGameButton,
  Logo,
  StarsBottom,
  StarsTop,
  Star,
  StarsMiddle,
  LogoSpan,
  Ufo,
  Rocket,
} from "./HomePageElements";
const star = require("../../img/star.png");
const ufo = require("../../img/ufo.png");
const rocket = require("../../img/rocket.png");

type HomePageProps = {
  gameStartedToggle: () => void;
};

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomePageWrapper>
      <LogoWrapper>
        <Logo color={"#f9d967"}>
          Ga<LogoSpan color={"#e773ff"}>me</LogoSpan>
        </Logo>
        <Logo color={"#4ffaff"}>Manager</Logo>
      </LogoWrapper>
      <StarsBottom>
        <Star src={star} alt="star" size={"61px"} />
        <Star src={star} alt="star" size={"61px"} />
        <Star src={star} alt="star" size={"61px"} />
      </StarsBottom>
      <StarsTop>
        <Star src={star} alt="star-top" size={"30px"} />
        <Star src={star} alt="star-top" size={"30px"} />
      </StarsTop>
      <StarsMiddle>
        <Star src={star} alt="star-bot" size={"30px"} />
        <Star src={star} alt="star-bot" size={"30px"} />
      </StarsMiddle>
      <StartGameButton onClick={() => navigate("/selectgame")}>
        Let's play
      </StartGameButton>
      <Ufo src={ufo} alt="ufo-png" />
      <Rocket src={rocket} alt="rocke-png" />
    </HomePageWrapper>
  );
};
