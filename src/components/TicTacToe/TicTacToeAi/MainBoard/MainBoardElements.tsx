import styled from "styled-components";

export const GamePage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-width: 300px;
  font-size: 12px;
`;
export const SummaryHeader = styled.h1`
  color: white;
  margin-bottom: 10px;
`;

export const NewGameButton = styled.button`
  padding: 5px;
  border-radius: 10px;
  border: none;
  background: white;
  font-family: "roboto", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: blue;
  cursor: pointer;
  margin: 5px;
`;
