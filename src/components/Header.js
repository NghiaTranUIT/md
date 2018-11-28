import React from "react";
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Classes
} from "@blueprintjs/core";

const Header = () => {
  return (
    <Navbar fixedToTop={true}>
      <NavbarGroup align={Classes.ALIGN_LEFT}>
        <NavbarHeading>md</NavbarHeading>
        <NavbarDivider />
        <input className={Classes.INPUT} />
      </NavbarGroup>
    </Navbar>
  );
};

export default Header;
