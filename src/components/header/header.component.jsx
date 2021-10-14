import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { HeaderStyle, LogoContainer, Options, Option } from "./header.styles";

const Header = () => (
  <HeaderStyle>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <Options>
      <Option to="/shop">SHOP</Option>
      <Option to="/contact">CONTACT</Option>
    </Options>
  </HeaderStyle>
);

export default Header;
