import { useContext } from "react";
import { AppLayoutContext } from "../Layout";
import { Label, Value } from "./styles";
import { PageWrapper } from "pages/EmployeeApp/LogIn/styles";



function Employees() {
  const context = useContext(AppLayoutContext);
  if (!context) {
    return null;
  }
  const { employee } = context;

  return (
  
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
   
  )
}
export default Employees;