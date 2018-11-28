import React, { Component } from "react";
import SimpleMDEEditor from "react-simplemde-editor";
import "simplemde/dist/simplemde.min.css";
import MenuBar from "../containers/MenuBar";

class App extends Component {
  handleChange = value => {
    this.setState({ mdeValue: value });
  };

  render() {
    return (
      <>
        <MenuBar />
        <div style={{ "padding-top": 50 }}>
          <SimpleMDEEditor
            onChange={this.handleChange}
            options={{
              autofocus: true
            }}
          />
        </div>
      </>
    );
  }
}

export default App;
