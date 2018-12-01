import React, { Component } from "react";
import "simplemde/dist/simplemde.min.css";
import MenuBar from "../containers/MenuBar";
import Editor from "../containers/Editor";
import FileTreeContainer from "../containers/FileTreeContainer";

class App extends Component {
  render() {
    return (
      <>
        <MenuBar />
        <Editor />
        <FileTreeContainer />
      </>
    );
  }
}

export default App;
