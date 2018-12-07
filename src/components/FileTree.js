import React from "react";
import { Icon, Menu, MenuItem } from "@blueprintjs/core";
import PropTypes from "prop-types";
import { IconNames } from "@blueprintjs/icons";

const FileTree = ({ files, activeFileId, selectFile, deleteFile }) => {
  return (
    <Menu>
      {files.map(f => (
        <MenuItem
          key={f.id}
          text={f.name}
          active={f.id === activeFileId}
          icon={<Icon icon={IconNames.DOCUMENT} />}
          onClick={() => selectFile(f.id)}
          labelElement={
            <Icon
              icon={IconNames.SMALL_CROSS}
              onClick={() => deleteFile(f.id)}
            />
          }
        />
      ))}
    </Menu>
  );
};

FileTree.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  activeFileId: PropTypes.string.isRequired,
  selectFile: PropTypes.func.isRequired,
  deleteFile: PropTypes.func.isRequired
};

export default FileTree;
