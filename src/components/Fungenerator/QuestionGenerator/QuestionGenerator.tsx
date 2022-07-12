import styled from "styled-components";

export const QuestionGeneratorWrapper = styled.div`
  color: var(--black-font);
  font-weight: 400;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-size: 1.5rem;
  padding: 5rem 0;
`;
export const Forms = styled.form`
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
export const Select = styled.select`
  font-size: 1.2rem;
  width: 25rem;
  margin: 10px 0;
`;
export const Option = styled.option`
  text-transform: capitalize;
`;
export const Submit = styled.input`
  width: 193px;
  height: 52px;
  color: #f5f7fb;
  font-family: var(--main-font);
  background: var(--secondary-color);
  border-radius: 15px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 2rem;
  transition: 0.3s all;
  margin-bottom: 1rem;
  border: 2px solid var(--secondary-color);
  &:hover {
    border: 2px solid #00ebff;
  }
`;
