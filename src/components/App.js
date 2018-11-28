import React, { Component } from "react";
import SimpleMDEEditor from "react-simplemde-editor";
import "simplemde/dist/simplemde.min.css";

class App extends Component {
  handleChange = value => {
    this.setState({ mdeValue: value });
  };

  render() {
    return (
      <div>
        <SimpleMDEEditor
          onChange={this.handleChange}
          options={{
            autofocus: true
          }}
        />
      </div>
    );
  }
}

export default App;
