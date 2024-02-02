import React from "react";
import { LogoDiv, MainWrapper, NavItemsDiv, Wrapper } from "./style";
import Logo from "./logo/Logo";
import NavItems from "./navitems/NavItems";

function Navbar() {
  return (
    <MainWrapper>
      <Wrapper>
        <LogoDiv>
          <Logo />
        </LogoDiv>
        <NavItemsDiv>
          <NavItems />
        </NavItemsDiv>
      </Wrapper>
    </MainWrapper>
  );
}

export default Navbar;
