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
export const LogoSpan = styled.span<{ color: string }>`
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
  box-sizing: border-box;
  border: 2px solid white;
  &:hover {
    border: 2px solid #4ffaff;
  }
`;

export const StarsBottom = styled.div`
  display: flex;
  margin-top: 40px;
`;
export const Star = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  margin: 50px 20px;
`;
export const StarsTop = styled(StarsBottom)`
  position: absolute;
  width: 90%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StarsMiddle = styled(StarsTop)`
  margin: 180px 0px;
  width: 60%;
  justify-content: space-between;
`;

export const Ufo = styled.img`
  position: absolute;
  bottom: 90px;
  right: 20px;
`;

export const Rocket = styled(Ufo)`
  bottom: 20px;
  left: 20px;
  width: 10rem;
`;
