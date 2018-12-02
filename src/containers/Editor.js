import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import * as PropTypes from "prop-types";
import { TextArea } from "@blueprintjs/core";
const uuidv1 = require("uuid/v1");

class Editor extends Component {
  componentDidMount() {
    const { id, createNewFile } = this.props;
    if (id == null) {
      const id = uuidv1();
      createNewFile(id, "Untitled.md", "# Hello World");
    }
  }

  render() {
    const { id, content, onContentChange } = this.props;
    return (
      <div style={{ paddingTop: 50 }}>
        <TextArea
          value={content}
          onChange={e => onContentChange(id, e.target.value)}
          fill={true}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  onContentChange: PropTypes.func,
  createNewFile: PropTypes.func
};

const mapStateToProps = state => {
  const activeFileId = state.editor.activeFileId;
  const activeFile = state.editor.files[activeFileId];
  const content = activeFile ? activeFile.content : "";
  return {
    id: activeFileId,
    content
  };
};

const mapDispatchToProps = dispatch => ({
  onContentChange: (id, content) =>
    dispatch(actions.updateFile(id, undefined, content)),
  createNewFile: (id, name, content) => {
    dispatch(actions.createNewFile(id, name, content));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
