import { connect } from "react-redux";
import Header from "../components/Header";
import { createNewFile, updateFile } from "../actions";
import PropTypes from "prop-types";
import React, { Component } from "react";
const uuidv1 = require("uuid/v1");

class MenuBar extends Component {
  render() {
    const { id, fileName, onFileNameChange, onCreateNewFile } = this.props;
    return (
      <Header
        onFileNameChange={text => onFileNameChange(id, text)}
        onCreateNewFile={() => onCreateNewFile()}
        fileName={fileName}
      />
    );
  }
}

const mapStateToProps = state => {
  const activeFileId = state.editor.activeFileId;
  const activeFile = state.editor.files[activeFileId];

  return {
    fileName: activeFile ? activeFile.name : "",
    id: activeFileId
  };
};

const mapDispatchToProps = dispatch => ({
  onFileNameChange: (id, name) => dispatch(updateFile(id, name)),
  onCreateNewFile: () => dispatch(createNewFile(uuidv1(), "Untitled.md", ""))
});

MenuBar.propTypes = {
  id: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  onFileNameChange: PropTypes.func.isRequired,
  onCreateNewFile: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar);
