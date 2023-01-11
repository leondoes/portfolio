import React, { useEffect, useState } from "react";
import { NavBarStyled,NavBarLogo } from "./styled";
import NavBarLinks from "../NavBarLinks";
import { themeColors } from "../../common/theme";

const brandColor = themeColors.brand;

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
      const navBarListener = () => {
        if (window.scrollY > 10) {
          setCollapsed(() => true);
        } else {
          setCollapsed(() => false);
        }
      };
  
      document.addEventListener("scroll", navBarListener);
  
      return () => window.removeEventListener("scroll", navBarListener);
    }, []);
  
    return (
      <NavBarStyled style={{ height: collapsed ? "80px" : "122px" }}>
        <NavBarLogo to="/">leon<div style={{color:brandColor}}>does.</div></NavBarLogo>
        <NavBarLinks
        style={{ display: collapsed ? "none" : "flex" }}
        />
      </NavBarStyled>
    );
}

export default NavBar;