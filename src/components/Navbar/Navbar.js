import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavLogo, NavMenu } from "./styled";
import { Button } from "../../globalStyle";


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to={"/"}>
          <NavIcon />
          ULTRA
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to={"/"}>
              Home
            </NavLinks>
          </NavItem><NavItem>
          <NavLinks to={"services"}>
            Services
          </NavLinks>
        </NavItem><NavItem>
          <NavLinks to={"products"}>
            Products
          </NavLinks>
        </NavItem>
          <NavItemBtn>
            {button
              ? <NavBtnLink to={"/sign-up"}>
                <Button primary>SIGN UP</Button>
              </NavBtnLink>
              : <NavBtnLink to={"/sign-up"}>
                <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
              </NavBtnLink>
            }
          </NavItemBtn>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;