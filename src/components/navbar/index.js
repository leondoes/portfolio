import React from "react";
import { NavBarStyled, NavBarLogo } from "./styled";
import HamburgerMenu from "../HamburgerMenu";
import { themeColors } from "../../common/theme";

const NavBar = () => {
  return (
    <NavBarStyled>
      <NavBarLogo to="/">
        leon<div style={{ color: themeColors.brand }}>does.</div>
      </NavBarLogo>
      <HamburgerMenu />
    </NavBarStyled>
  );
};

export default NavBar;
