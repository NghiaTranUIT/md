import { connect } from "react-redux";
import Header from "../components/Header";
import { updateActiveFileName } from "../actions";

const mapStateToProps = state => ({
  fileName: state.editor.fileName
});

const mapDispatchToProps = dispatch => ({
  onFileNameChange: text => dispatch(updateActiveFileName(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
