import styled from "styled-components";

export const SelectGameWrapper = styled.div`
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  z-index: 0;
`;
export const SelectGameHeader = styled.h1`
  color: white;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
`;

export const Break = styled.hr`
  width: 147px;
  border: 2px solid rgba(255, 168, 0, 1);
`;

export const ButtonContainer = styled.div`
  margin: 47px 0;
`;

export const SingleButton = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  position: relative;
  margin: 9px 0;
`;

export const Circle = styled.div<{
  backgr: string;
  borderStyling: string;
}>`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ backgr }) => backgr};
  border: ${({ borderStyling }) => borderStyling};
`;

export const Square = styled.div<{
  backgr: string;
  borderStyling: string;
}>`
  width: 180px;
  height: 50px;
  position: absolute;
  left: 69px;
  border-radius: 20px;
  padding-left: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 2;

  background: ${({ backgr }) => backgr};
  border: ${({ borderStyling }) => borderStyling};
`;
export const GameLogo = styled.img`
  width: 70px;
  z-index: 999;
`;

export const SmallGamePad = styled.img`
  width: 140px;
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
`;
