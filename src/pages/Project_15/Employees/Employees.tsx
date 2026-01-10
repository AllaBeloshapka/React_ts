import { useContext } from "react";
import { AppLayoutContext } from "../Layout";
import { DataWrapper, Label, Value } from "./styles";
import { PageWrapper } from "pages/EmployeeApp/LogIn/styles";



function Employees() {
  const context = useContext(AppLayoutContext);
  if (!context) {
    return null;
  }
  const { employee } = context;

  return (
    <DataWrapper>
       < PageWrapper>
        <Label>name</Label>
        <Value>{employee?.name}</Value>
        <Label>surname</Label>
        <Value>{employee?.lastName}</Value>
        <Label>age</Label>
        <Value>{employee?.age}</Value>
        <Label>position</Label>
        <Value>{employee?.jobPosition}</Value>
        </ PageWrapper>  
    </DataWrapper>
  )
}
export default Employees;