import { useContext } from "react";

//Импортируем контекст приложения
import { AppLayoutContext } from "../Layout";

//Импортируем стилизованные компоненты для отображения данных сотрудника
import { Card, Label, Value } from "./styles";
import { PageWrapper } from "./styles";
import { v4 } from "uuid";

function Employees() {
  //Получаем контекст приложения
  const { employee } = useContext(AppLayoutContext);
  //Создаем карточки для каждого сотрудника
  const employeeCards = employee.map((employeeData) => {
    //Возвращаем карточку с данными сотрудника
    return (
      <Card key={v4()}>
        {" "}
        <Label>Name</Label>
        <Value>{employeeData.name}</Value>
        <Label>Surname</Label>
        <Value>{employeeData.lastName}</Value>
        <Label>Age</Label>
        <Value>{employeeData.age}</Value>
        <Label>Job Position</Label>
        <Value>{employeeData.jobPosition}</Value>
      </Card>
    );
  });

  return (
    // Отображаем данные сотрудника
    <PageWrapper>{employeeCards}</PageWrapper>
  );
}
export default Employees;
