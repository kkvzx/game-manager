import styled from "styled-components";

export const SingleButton = styled.div<{ squares: boolean }>`
  width: 70px;
  height: 70px;
  margin: 15px;
  background: rgba(196, 196, 196, 1);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.squares != null) {
      if (props.squares) {
        return "background:#e773ff";
      } else {
        return "background:#4ffaff";
      }
    } else {
      return "rgba(196, 196, 196, 1)";
    }
  }}
`;

export const XoSymbol = styled.div`
  font-size: 3rem;
  color: blue;
`;
