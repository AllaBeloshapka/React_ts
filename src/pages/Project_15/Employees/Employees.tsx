import { useContext } from "react";
import { AppLayoutContext } from "../Layout";
import { DataTitle, DataWrapper } from "./styles";

function Employees() {
  const text = useContext(AppLayoutContext);

  return (
    <DataWrapper>
      <DataTitle>{text}</DataTitle>   
    </DataWrapper>
  )
}
export default Employees;