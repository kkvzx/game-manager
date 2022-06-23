import styled from "styled-components";

export const ScoreboardContainer = styled.div`
  width: 300px;
  height: 100px;
  margin: 45px 0 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Player = styled.div`
  width: 100px;
  height: 100px;
  background: #391898;
  border-radius: 20px;
  text-align: center;
  color: white;
  font-size: 3rem;
`;
export const PlayerHeader = styled.h2`
  font-size: 12px;
  margin: 9px 0 13px 0;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;
export const Scores = styled.div`
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: white;
  letter-spacing: 8px;
`;
