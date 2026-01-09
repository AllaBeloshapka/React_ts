import styled from "@emotion/styled";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid black;
  background-color: white;
  padding: 10px 50px;
`;

export const HeaderLogoWrapper = styled.div`
  width: 120px;
  height: 100%;
`;

export const HeaderLogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderNavigation = styled.nav`
  height: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const resolveActiveNavLinkStyles = (
  { isActive }: NavLinkRenderProps
) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});

export const HeaderNavLink = styled(NavLink)`
  font-size: 28px;
  color: black;
`;

export const AppMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #182434ff;
`;




