import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tree, TreeNode } from "@blueprintjs/core";
import connect from "react-redux/es/connect/connect";

class FileTree extends Component {
  render() {
    const { files } = this.props;
    return (
      <>
        <Tree
          contents={files.map((f, i) => {
            return <TreeNode id={f.id} label={f.name} hasCaret={true} />;
          })}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  files: Object.keys(state.editor.files).map(id => ({
    id,
    name: state.editor.files[id].name
  }))
});

FileTree.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps)(FileTree);
