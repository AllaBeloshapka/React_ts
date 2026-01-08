import { useNavigate } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Main,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  getActiveStyles,
} from "./styles";
import { type LayoutProps } from "./types";
import { ROUTES } from "./routes";


function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const onCreateEmployees = () => {
   
  };

  return (
    <LayoutWrapper>
      <Header>
        <Logo >
          <LogoImg
            src="https://www.designmantic.com/logo-images/6963.png?company=Company%20Name&keyword=employees&slogan=&verify=1"
            alt="App Logo"
          />
        </Logo>
        <NavigationContainer>
          <HeaderLink
            style={getActiveStyles}
            to={ROUTES.CREATE_EMPLOYEES}>
            Create Employees
          </HeaderLink>

          <HeaderLink
          style={getActiveStyles}
            to={ROUTES.EMPLOYEES}>Employees</HeaderLink>       

        </NavigationContainer>
      </Header>
      <Main>{children}</Main>

    </LayoutWrapper>
  );
}

export default Layout;