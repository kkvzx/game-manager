import styled from "styled-components";
import "../GlobalStyling.css";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bck-color);
`;
export const GameContainer = styled.div`
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--main-color);
  border-radius: 10px;
  position: relative;
`;
export const SummaryContainer = styled(GameContainer)``;
