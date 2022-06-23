import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomePageWrapper,
  LogoWrapper,
  StartGameButton,
  Logo,
} from "./HomePageElements";
const star = require("../../img/star.png");

type HomePageProps = {
  gameStartedToggle: () => void;
};

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomePageWrapper>
      <LogoWrapper>
        <Logo color={"#f9d967"}>Tic</Logo>
        <Logo color={"#e773ff"}>Tac</Logo>
        <Logo color={"#4ffaff"}>Toe</Logo>
      </LogoWrapper>
      {/* <StarsBottom>
        <Img src={star} alt="star"></Img>
        <Img src={star} alt="star"></Img>
        <Img src={star} alt="star"></Img>
      </StarsBottom>
      <StarsTop>
        <Img src={star} alt="star-top"></Img>
        <Img src={star} alt="star-top"></Img>
      </StarsTop>
      <StarsBot>
        <Img src={star} alt="star-bot"></Img>
        <Img src={star} alt="star-bot"></Img>
      </StarsBot> */}
      <StartGameButton onClick={() => navigate("/selectgame")}>
        Let's play
      </StartGameButton>
    </HomePageWrapper>
  );
};
