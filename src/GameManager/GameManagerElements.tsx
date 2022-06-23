import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #adadad;
`;

export const App = styled.div`
  min-width: 360px;
  height: 640px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(44, 47, 72, 1) 64%,
    rgba(50, 0, 97, 1) 100%
  );
  border-radius: 20px;
`;
