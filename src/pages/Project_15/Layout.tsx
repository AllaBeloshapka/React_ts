

import { createContext, type ChangeEvent, useState } from "react";

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

//Создаем контекст для передачи данных между компонентами
export const AppLayoutContext = createContext<string | undefined>(undefined);

function Layout({ children }: LayoutProps) {
  //Состояния для хранения значений текста
const [textValue, setTextValue] = useState<string>("");
//Состояния для хранения окончательного текста и передачи его в контекст
  const [text, setText] = useState<string>("");

  //Обработчик изменения текста в текстовом поле
  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };
//Функция для обновления контекста с текущим значением текста
  const userData = () => {
    setText(textValue);
  };

  return (
    //Оборачиваем компоненты в провайдер контекста и передаем значение текста
    <AppLayoutContext.Provider value={text}>
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
