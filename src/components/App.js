import React, { Component } from "react";
import "simplemde/dist/simplemde.min.css";
import MenuBar from "../containers/MenuBar";
import Editor from "../containers/Editor";
import FileTree from "../containers/FileTree";

class App extends Component {
  render() {
    return (
      <>
        <MenuBar />
        <Editor />
        <FileTree />
      </>
    );
  }
}

export default App;
