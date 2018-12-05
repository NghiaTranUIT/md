import React, { Component } from "react";
import MenuBar from "../containers/MenuBar";
import EditorContainer from "../containers/EditorContainer";
import FileTreeContainer from "../containers/FileTreeContainer";

class App extends Component {
  render() {
    return (
      <>
        <MenuBar />
        <EditorContainer />
        <FileTreeContainer />
      </>
    );
  }
}

export default App;
