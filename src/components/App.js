import React, { Component } from "react";
import MenuBar from "../containers/MenuBar";
import EditorContainer from "../containers/EditorContainer";
import FileTreeContainer from "../containers/FileTreeContainer";
import styled from "styled-components";

const FlexboxContainer = styled.div`
  padding-top: 50px;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const SideBarContainer = styled.div`
  width: 300px;
  flex: 0;
`;

const MainContainer = styled.div`
  flex: 1;
`;

class App extends Component {
  render() {
    return (
      <FlexboxContainer>
        <SideBarContainer>
          <FileTreeContainer />
        </SideBarContainer>
        <MainContainer>
          <MenuBar />
          <EditorContainer />
        </MainContainer>
      </FlexboxContainer>
    );
  }
}

export default App;
