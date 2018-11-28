import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import SimpleMDEEditor from "react-simplemde-editor";
import * as PropTypes from "prop-types";
const uuidv1 = require("uuid/v1");

class Editor extends Component {
  componentDidMount() {
    const { id, createNewFile } = this.props;
    if (id === undefined) {
      createNewFile(uuidv1(), "Untitled.md", "# Hello World");
    }
  }

  render() {
    const { id, content, onContentChange } = this.props;
    return (
      <div style={{ paddingTop: 50 }}>
        <SimpleMDEEditor
          onChange={text => onContentChange(id, text)}
          value={content}
          options={{
            spellChecker: false,
            autofocus: true
          }}
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
  const activeFile = state.editor.files.find(f => f.id === activeFileId);
  const content = activeFile ? activeFile.content : "";
  return {
    content
  };
};

const mapDispatchToProps = dispatch => ({
  onContentChange: (id, content) => dispatch(actions.updateFile(id, content)),
  createNewFile: (id, name, content) => {
    dispatch(actions.createNewFile(id, name, content));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
