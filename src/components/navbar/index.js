import React, { useEffect, useState } from "react";
import { NavBarStyled, NavBarLogo } from "./styled";
import NavBarLinks from "../NavBarLinks";
import HamburgerMenu from "../HamburgerMenu";
import { themeColors } from "../../common/theme";

const brandColor = themeColors.brand;

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  useEffect(() => {
    const navBarListener = () => {
      if (window.scrollY > 10) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    document.addEventListener("scroll", navBarListener);

    return () => window.removeEventListener("scroll", navBarListener);
  }, []);

  useEffect(() => {
    if (collapsed) {
      setShowHamburgerMenu(true);
    } else {
      setShowHamburgerMenu(false);
    }
  }, [collapsed]);

  return (
    <NavBarStyled style={{ height: collapsed ? "90px" : "90px" }}>
      <NavBarLogo to="/">
        leon<div style={{ color: brandColor }}>does.</div>
      </NavBarLogo>
      {showHamburgerMenu ? <HamburgerMenu /> : <NavBarLinks />}
    </NavBarStyled>
  );
};

export default NavBar;
