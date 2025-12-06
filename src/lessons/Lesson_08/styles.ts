import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 30px;
`;

export const Paragraph = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;

  :hover {
    color: rgba(152, 9, 9, 1);
  }
`;
export const ButtonControl = styled.div`
  width: 300px;
`;
