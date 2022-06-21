import styled from "styled-components";

export const SelectGameWrapper = styled.div`
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  overflow: hidden;
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

export const Circle = styled.div<{ backgr: string; borderStyling: string }>`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  z-index: 1;

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
  background: ${({ backgr }) => backgr};
  border: ${({ borderStyling }) => borderStyling};
`;
