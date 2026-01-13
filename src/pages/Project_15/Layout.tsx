//Компонент Layout.tsx - это основной макет приложения, 
// который включает в себя заголовок с навигацией и область основного контента.
import { createContext, useState } from "react";
//Импортируем стилизованные компоненты для заголовка, навигации и основного контента
import {
  AppHeader,
  AppMain,
  HeaderLogoWrapper,
  HeaderLogoImage,
  HeaderNavLink,
  HeaderNavigation,
  resolveActiveNavLinkStyles,
} from "./styles";
//Импортируем типы и маршруты
import { type LayoutProps, type LayoutPropsContext } from "./types";
import { ROUTES } from "./routes";

//Типизация данных сотрудника
export type Employee = {
  name: string;
  lastName: string;
  age: string;
  jobPosition: string;
};

//Создаем контекст приложения с начальными значениями undefined
export const AppLayoutContext =
  createContext<LayoutPropsContext>({
  employee: undefined,
  setEmployee: () => {},
  });


function Layout({ children }: LayoutProps) {
  //Создаем состояние для хранения данных сотрудника
  const [employee, setEmployee] = useState<Employee | undefined>(undefined);
  return (
    //Оборачиваем компоненты в провайдер контекста и передаем значение текста
    <AppLayoutContext.Provider value={{ employee: employee, setEmployee: setEmployee }}>
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
