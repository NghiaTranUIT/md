import editor from "./editor";
import { createNewFile, updateFile, updateFileContent } from "../actions";

const files = [
  {
    id: "1",
    name: "1.md",
    content: "a"
  },

  {
    id: "2",
    name: "2.md",
    content: "b"
  },

  {
    id: "3",
    name: "3.md",
    content: "c"
  }
];

describe("editor reducer", () => {
  it("should handle initial state", () => {
    expect(editor(undefined, {})).toEqual({
      activeFileId: null,
      files: []
    });
  });

  it("should handle CREATE_NEW_FILE action", () => {
    const id = "asodjfaosjfojwef";
    const name = "new file.md";
    const content = "new content";
    const newFile = {
      id,
      name,
      content
    };
    const state = editor({ files }, createNewFile(id, name, content));

    expect(state.files).toEqual([...files, newFile]);
    expect(state.activeFileId).toEqual(id);
  });

  it("should handle UPDATE_FILE action", () => {
    const foundIdx = files.findIndex(f => f.id === "1");
    const updatedFile = {
      ...files[foundIdx],
      name: "new name",
      content: "new content"
    };

    const expectedFiles = ([...files][foundIdx] = updatedFile);

    expect(
      editor({ files }, updateFile("1", "new name", "new content")).files
    ).toContainEqual(expectedFiles);
  });

  it("should handle UPDATE_FILE action when id is invalid", () => {
    expect(
      editor({ files }, updateFile("non existing id", "new name")).files
    ).toEqual(files);
    expect(editor({ files }, updateFile(undefined, "new name")).files).toEqual(
      files
    );
  });

  it("should handle UPDATE_FILE action when name is invalid", () => {
    expect(
      editor({ files }, updateFile("non existing id", undefined)).files
    ).toEqual(files);

    expect(editor({ files }, updateFile("1", undefined)).files).toEqual(files);
  });
});
