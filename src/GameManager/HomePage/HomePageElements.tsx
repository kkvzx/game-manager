import styled from "styled-components";

export const HomePageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LogoWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
`;
export const Logo = styled.h1<{ color: string }>`
  font-size: 5rem;
  font-family: "Oswald", sans-serif;
  line-height: 100%;
  color: ${({ color }) => color};
`;

export const StartGameButton = styled.button`
  padding: 10px 36px;
  border-radius: 20px;
  border: none;
  margin-bottom: 218px;
  background: white;
  font-family: "roboto", sans-serif;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
`;
