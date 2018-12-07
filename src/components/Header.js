import React from "react";
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Classes,
  EditableText,
  MenuItem,
  Menu,
  Popover,
  Position,
  Button,
  Icon
} from "@blueprintjs/core";
import PropTypes from "prop-types";
import { IconNames } from "@blueprintjs/icons";

const Header = ({ fileName, onFileNameChange, onCreateNewFile }) => {
  return (
    <Navbar fixedToTop={true}>
      <NavbarGroup align={Classes.ALIGN_LEFT}>
        <NavbarHeading>md</NavbarHeading>
        <NavbarDivider />
        <EditableText
          selectAllOnFocus={true}
          value={fileName}
          onChange={onFileNameChange}
          maxLength={255}
          placeholder="Click to name the file"
        />
        <NavbarDivider />
        <Popover
          position={Position.BOTTOM_LEFT}
          content={
            <Menu>
              <MenuItem
                text={"New File"}
                icon={<Icon icon={IconNames.DOCUMENT} />}
                onClick={() => {
                  onCreateNewFile();
                }}
              />
            </Menu>
          }
        >
          <Button text={"File"} />
        </Popover>
      </NavbarGroup>
    </Navbar>
  );
};

Header.propTypes = {
  fileName: PropTypes.string.isRequired,
  onFileNameChange: PropTypes.func.isRequired,
  onCreateNewFile: PropTypes.func.isRequired
};

export default Header;
