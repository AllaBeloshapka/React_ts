import { useNavigate } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
  getActiveStyles,
} from "./styles";
import { type LayoutProps } from "./types";
import { ROUTES } from "constants/routes";


function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </Logo>
        <NavigationContainer>
          <HeaderLink
            style={getActiveStyles}
            to={ROUTES.HOME}>
            Home
          </HeaderLink>

          <HeaderLink
          style={getActiveStyles}
            to={ROUTES.CONTACT_US}>Contact Us</HeaderLink>

          <HeaderLink
            style={getActiveStyles}
            to={ROUTES.ABOUT}>About</HeaderLink>

          <HeaderLink
            style={getActiveStyles}
            to={ROUTES.LOGIN}>Login</HeaderLink>
            
          <HeaderLink
            style={getActiveStyles}
            to={ROUTES.CLIENTS}>Clients</HeaderLink>

        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </FooterLogo>
        <FooterNavigation>
          <FooterLink to={ROUTES.HOME}>Home</FooterLink>
          <FooterLink to={ROUTES.CONTACT_US}>Contact Us</FooterLink>
          <FooterLink to={ROUTES.ABOUT}>About</FooterLink>
          <FooterLink to={ROUTES.LOGIN}>Login</FooterLink>
          <FooterLink to={ROUTES.CLIENTS}>Clients</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
