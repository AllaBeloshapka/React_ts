import styled from "@emotion/styled";

interface ButtonComponentStyles {
  $isRed: boolean;
  $isDisabled: boolean;
}

export const ButtonControl = styled.button<ButtonComponentStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0;
  height: 70px;
  width: 100%;
  background-color: 

  ${({ $isRed }) => ($isRed ? "rgba(232, 13, 13, 1)" : " rgb(82, 82, 241)")};
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

:disabled {
   ${({ $isDisabled }) =>
    $isDisabled ? "rgba(133, 130, 130, 1)" : " rgb(82, 82, 241)"};
}

  :hover {
    background-color: ${({ $isRed }) =>
      $isRed ? "rgba(206, 9, 9, 1)" : "rgb(104, 104, 233)"};
  }
`;
