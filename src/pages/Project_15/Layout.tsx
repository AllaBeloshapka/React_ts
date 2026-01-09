import { useNavigate } from "react-router-dom";

import {
  AppLayout,
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

function Layout({ children }: LayoutProps) {


  return (
    <AppLayout>
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
    </AppLayout>
  );
}

export default Layout;
