import { connect } from "react-redux";
import Header from "../components/Header";
import { updateFile } from "../actions";

const mapStateToProps = state => {
  const activeFileId = state.editor.activeFileId;
  const activeFile = state.editor.files.find(f => f.id === activeFileId);

  return {
    id: activeFileId,
    fileName: activeFile ? activeFile.name : ""
  };
};

const mapDispatchToProps = dispatch => ({
  onFileNameChange: (id, name) => dispatch(updateFile(id, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
