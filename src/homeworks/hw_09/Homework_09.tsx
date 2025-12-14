import { useState, type ChangeEvent, type FormEvent } from "react";
import {v4} from 'uuid'

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import {
  PageWrapper,
  NoteForm,
  ButtonControl,
  Notes,
  NoteItem,
  NoteTitle,
} from "./styles";

function Homework_09() {
  const [note, setNote] = useState<string>("");
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onSaveNote = (event: FormEvent) => {
    event.preventDefault();
    // prevValue === savedNotes в момент вызова функции setSavedNotes
    setSavedNotes((prevValue: string[]) => {
      console.log(prevValue);
      return [...prevValue, note];
    });
  };

  console.log(savedNotes);
  // Допустим savedNotes = ["Coocking", "Shopping"]
  // Наша задача вернуть новый массив notesList который будет иметь вид(условно говоря) = [<NoteItem>Coocking</NoteItem>, <NoteItem>Shopping</NoteItem>]
  const notesList = savedNotes.map((value: string) => {
    return <NoteItem key={v4()}>{value}</NoteItem>
  });

  return (
    <PageWrapper>
      <NoteForm onSubmit={onSaveNote}>
        <Input
          id="todo-input"
          name="todo"
          placeholder="Enter your note"
          label="Note"
          value={note}
          onChange={onNoteChange}
        />
        <ButtonControl>
          <Button name="Add" type="submit" />
        </ButtonControl>
      </NoteForm>
      <Notes>
        <NoteTitle>Your notes</NoteTitle>
        {notesList}
      </Notes>
    </PageWrapper>
  );
}

export default Homework_09;

