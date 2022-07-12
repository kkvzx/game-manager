import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const QuestionsWrapper = styled.div``;

export const Scoreboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0 0 0;
`;

export const ScoreboardP = styled.p`
  font-family: var(--main-font);
  font-weight: 700;
  font-size: 12.8px;
  color: var(--black-font);
  margin: 0 14px;
`;

export const ScoreboardButton = styled.button`
  font-family: var(--main-font);
  font-weight: 700;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1.6px solid #00ebff;
  cursor: pointer;

  color: #f5f7fb;
  background: var(--secondary-color);
  transition: 0.3s all;
  border: 2px solid var(--secondary-color);
  &:hover {
    border: 2px solid #00ebff;
  }
`;
export const GoBackArrow = styled(AiOutlineArrowLeft)`
  width: 3rem;
  height: 3rem;
  color: #f5f7fb;
  font-family: var(--main-font);
  background: var(--secondary-color);
  border-radius: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s all;
  border: 2px solid var(--secondary-color);
  &:hover {
    border: 2px solid #00ebff;
  }
`;
