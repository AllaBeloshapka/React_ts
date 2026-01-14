import { type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { Employee } from "./Layout";

//Типизация пропсов для компонента Layout
export interface LayoutProps {
  children: ReactNode;
}

//Типизация контекста приложения
export interface LayoutPropsContext {
  //Данные сотрудника и функция для их обновления
  employee: Employee[];
  setEmployee: Dispatch<SetStateAction<Employee[]>>;
}
  