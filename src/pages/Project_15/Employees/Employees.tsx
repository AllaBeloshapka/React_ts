import { useContext } from "react";

//Импортируем контекст приложения
import { AppLayoutContext } from "../Layout";

//Импортируем стилизованные компоненты для отображения данных сотрудника
import { Label, Value } from "./styles";
import { PageWrapper } from "./styles";



function Employees() {
  //Получаем контекст приложения
  const context = useContext(AppLayoutContext);
  //Если контекст отсутствует, возвращаем undefined
  if (!context) {
    return undefined;
  }
  //Извлекаем данные сотрудника из контекста
  const { employee } = context;

  return (
  // Отображаем данные сотрудника
       < PageWrapper>
        {employee && (
        <>
          <Label>Name</Label>
        <Value>{employee.name}</Value>
        <Label>Surname</Label>
        <Value>{employee.lastName}</Value>
        <Label>Age</Label>
        <Value>{employee.age}</Value>
        <Label>Job Position</Label>
        <Value>{employee.jobPosition}</Value>
        </>
        )}
        </ PageWrapper>  
   
  )
}
export default Employees;