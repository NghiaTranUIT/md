import React from "react";
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Classes
} from "@blueprintjs/core";
import PropTypes from "prop-types";

const Header = ({ id, fileName, onFileNameChange }) => {
  return (
    <Navbar fixedToTop={true}>
      <NavbarGroup align={Classes.ALIGN_LEFT}>
        <NavbarHeading>md</NavbarHeading>
        <NavbarDivider />
        <input
          className={Classes.INPUT}
          value={fileName}
          onChange={e => onFileNameChange(id, e.target.value)}
        />
      </NavbarGroup>
    </Navbar>
  );
};

Header.propTypes = {
  id: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  onFileNameChange: PropTypes.func.isRequired
};

export default Header;
