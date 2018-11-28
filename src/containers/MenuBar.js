import { connect } from "react-redux";
import Header from "../components/Header";
import { updateFile } from "../actions";
import PropTypes from "prop-types";
import React, { Component } from "react";

class MenuBar extends Component {
  render() {
    const { id, fileName, onFileNameChange } = this.props;
    return (
      <Header
        onFileNameChange={text => onFileNameChange(id, text)}
        fileName={fileName}
      />
    );
  }
}

const mapStateToProps = state => {
  const activeFileId = state.editor.activeFileId;
  const activeFile = state.editor.files.find(f => f.id === activeFileId);

  return {
    fileName: activeFile ? activeFile.name : "",
    id: activeFileId
  };
};

const mapDispatchToProps = dispatch => ({
  onFileNameChange: (id, name) => dispatch(updateFile(id, name))
});

MenuBar.propTypes = {
  id: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  onFileNameChange: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar);
