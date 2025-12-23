
import React from "react";
import { FormWrapper, LabelName, TaskName } from "./styles.js";


function TodoForm() {
  return (
    <FormWrapper>
        <TaskName>
            <LabelName>Название задачи</LabelName>
            <input type="text"/>
        </TaskName>
    
    </FormWrapper>
  )
}
export default TodoForm;