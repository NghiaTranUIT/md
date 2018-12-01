import connect from "react-redux/es/connect/connect";
import FileTree from "../components/FileTree";

const mapStateToProps = state => ({
  files: Object.keys(state.editor.files).map(id => ({
    id,
    name: state.editor.files[id].name
  })),
  activeFileId: state.editor.activeFileId
});

export default connect(mapStateToProps)(FileTree);
