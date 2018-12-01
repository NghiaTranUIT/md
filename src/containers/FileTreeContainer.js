import connect from "react-redux/es/connect/connect";
import FileTree from "../components/FileTree";
import { selectFile } from "../actions";

const mapStateToProps = state => ({
  files: Object.keys(state.editor.files).map(id => ({
    id,
    name: state.editor.files[id].name
  })),
  activeFileId: state.editor.activeFileId
});

const mapDispatchToProps = dispatch => ({
  selectFile: id => dispatch(selectFile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileTree);
