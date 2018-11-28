import React from "react";
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Classes,
  EditableText
} from "@blueprintjs/core";
import PropTypes from "prop-types";

const Header = ({ fileName, onFileNameChange }) => {
  return (
    <Navbar fixedToTop={true}>
      <NavbarGroup align={Classes.ALIGN_LEFT}>
        <NavbarHeading>md</NavbarHeading>
        <NavbarDivider />
        <EditableText
          selectAllOnFocus={true}
          defaultValue={fileName}
          onChange={onFileNameChange}
          maxLength={255}
          placeholder="Click to name the file"
        />
      </NavbarGroup>
    </Navbar>
  );
};

Header.propTypes = {
  fileName: PropTypes.string.isRequired,
  onFileNameChange: PropTypes.func.isRequired
};

export default Header;
