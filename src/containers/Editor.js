import React from "react";
import { connect } from "react-redux";
import { updateFileContent } from "../actions";
import SimpleMDEEditor from "react-simplemde-editor";

const Editor = ({ content, onContentChange }) => {
  return (
    <div style={{ paddingTop: 50 }}>
      <SimpleMDEEditor
        onChange={onContentChange}
        value={content}
        options={{
          spellChecker: false,
          autofocus: true
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  content: state.editor.content
});

const mapDispatchToProps = dispatch => ({
  onContentChange: content => dispatch(updateFileContent(content))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
