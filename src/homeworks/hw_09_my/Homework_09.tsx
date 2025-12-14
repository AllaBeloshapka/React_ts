
import { TASK_FORM_VALUES } from "./types";
import { type FormEvent, type ChangeEvent, useState } from "react";
import Button from "components/Button/Button";
import "./styles";
import Input from "components/Input/Input";
import { Form, NameBox, Notes, TaskContainer } from "./styles";
import { v4 } from "uuid";


function Homework_09() {
  //Шаг 1: Создаем стейты для контроля HTML элеметов Input
  const [inputTask, setInput] = useState<string>("");

  //Шаг 2: Создаем обработчик изменений для Input, ловим событие onChange
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  //Шаг 5: создаём массив для хранения задач
  const [tasks, setTasks] = useState<string[]>([]);


  //Шаг 3: Создаем функцию addTask для переноса введённого текста в блок Notes по событию onSubmit формы
  const addTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //Шаг 6: Создаём фунцию добавления задачи в массив задач
    if (inputTask.trim() === "") 
      return;

    //Шаг 8: Добавляем новую задачу в стейт
    setTasks((prev) => [...prev, inputTask]);

    // Очищаем поле ввода
    setInput("");
  };

  return (
    <TaskContainer>
      <NameBox>Plan for the day</NameBox>

      <Notes>
        {tasks.map((task: string, index: number) => (
          <div key={v4()}>{task}</div>
        ))}
      </Notes>

      <Form onSubmit={addTask}>
        <Input
          id={"input-task-id"}
          name={TASK_FORM_VALUES.INPUT}
          placeholder={"Enter the task"}
          label={""}
          //Шаг 4: Привязываем стейты и обработчики к инпуту
          value={inputTask}
          onChange={onChangeInput}
        />
        <Button name={"Add a task"} type="submit" />
        {/* создаёмкнопку для удаления задачи из списка */}
        <Button name={"Delete"} type={undefined}></Button>
      </Form>
    </TaskContainer>
  );
}

export default Homework_09;
