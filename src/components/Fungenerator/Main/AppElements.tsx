import styled from "styled-components";

export const AppWrapper = styled.div`
  background: radial-gradient(
    73.23% 106% at 34.94% 108.33%,
    #f7cbfd 0%,
    #7758d1 100%
  );
  width: 650px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AppSection = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(44, 47, 72, 1) 64%,
    rgba(50, 0, 97, 1) 100%
  );
  /* background: linear-gradient(180deg, #5d5fef 0%, #843ce0 100%); */
  width: 650px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 0 70px 0 70px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: inset 1px 0px 0px rgba(255, 255, 255, 0.1);
`;
