import { createContext, useState } from "react";

import {
  AppHeader,
  AppMain,
  HeaderLogoWrapper,
  HeaderLogoImage,
  HeaderNavLink,
  HeaderNavigation,
  resolveActiveNavLinkStyles,
} from "./styles";

import { type LayoutProps } from "./types";
import { ROUTES } from "./routes";

//Типизация сотрудника
export type Employee = {
  name: string;
  lastName: string;
  age: string;
  jobPosition: string;
};

type AppLayoutContextType = {
  employee: Employee | null;
  setEmployee: (employee: Employee) => void;
};

export const AppLayoutContext =
  createContext<AppLayoutContextType | null>(null);

function Layout({ children }: LayoutProps) {
  const [employee, setEmployee] = useState<Employee | null>(null);

  return (
    //Оборачиваем компоненты в провайдер контекста и передаем значение текста
    <AppLayoutContext.Provider value={{ employee, setEmployee }}>
      <AppHeader>
        <HeaderLogoWrapper>
          <HeaderLogoImage
            src="https://www.designmantic.com/logo-images/6963.png?company=Company%20Name&keyword=employees&slogan=&verify=1"
            alt="App Logo"
          />
        </HeaderLogoWrapper>

        <HeaderNavigation>
          <HeaderNavLink
            to={ROUTES.CREATE_EMPLOYEES}
            style={resolveActiveNavLinkStyles}
          >
            Create Employees
          </HeaderNavLink>

          <HeaderNavLink
            to={ROUTES.EMPLOYEES}
            style={resolveActiveNavLinkStyles}
          >
            Employees
          </HeaderNavLink>
        </HeaderNavigation>
      </AppHeader>

      <AppMain>{children}</AppMain>
    </AppLayoutContext.Provider>
  );
}

export default Layout;
