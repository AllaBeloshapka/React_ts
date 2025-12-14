import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 100px;
  gap: 30px;
`;

export const NoteForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
  width: 600px;
  height: fit-content;
`;

export const ButtonControl = styled.div`
  width: 200px;
`;

export const Notes = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 400px;
  height: fit-content;
  border: 2px solid black;
  padding: 30px;
  border-radius: 6px;
`;

export const NoteTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: purple;
`;

export const NoteItem = styled.li`
  font-size: 20px;
  font-weight: bold;
`;



