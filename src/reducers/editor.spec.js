import editor, { defaultState } from "./editor";
import { createNewFile, selectFile, updateFile, wipeAll } from "../actions";

const files = {
  "1": {
    name: "1.md",
    content: "a"
  },

  "2": {
    name: "2.md",
    content: "b"
  },

  "3": {
    name: "3.md",
    content: "c"
  }
};

describe("editor reducer", () => {
  it("should handle initial state", () => {
    expect(editor(undefined, {})).toEqual({
      activeFileId: null,
      files: {}
    });
  });

  it("should handle CREATE_NEW_FILE action", () => {
    const id = "asodjfaosjfojwef";
    const name = "new file.md";
    const content = "new content";
    const newFile = {
      name,
      content
    };
    const state = editor({ files }, createNewFile(id, name, content));

    expect(state).toEqual({
      activeFileId: id,
      files: { ...files, [`${id}`]: newFile }
    });
  });

  it("should handle UPDATE_FILE action", () => {
    const updatedFile = {
      name: "new name",
      content: "new content"
    };

    const expectedFiles = { ...files, "1": updatedFile };

    const state = { activeFileId: "a", files };
    const expected_state = {
      ...state,
      files: { ...expectedFiles }
    };

    expect(editor(state, updateFile("1", "new name", "new content"))).toEqual(
      expected_state
    );
  });

  it("should handle UPDATE_FILE action with a blank content", () => {
    const updatedFile = {
      name: "new name",
      content: ""
    };

    const expectedFiles = { ...files, "1": updatedFile };

    const state = { activeFileId: "a", files };
    const expected_state = {
      ...state,
      files: { ...expectedFiles }
    };

    expect(editor(state, updateFile("1", "new name", ""))).toEqual(
      expected_state
    );
  });

  it("should handle UPDATE_FILE action when id is invalid", () => {
    const state = { activeFileId: null, files };
    expect(editor(state, updateFile("non existing id", "new name"))).toEqual({
      ...state,
      files
    });

    expect(editor(state, updateFile(undefined, "new name"))).toEqual({
      ...state,
      files
    });
  });

  it("should handle UPDATE_FILE action when name is invalid", () => {
    const state = { files };
    expect(editor(state, updateFile("non existing id", undefined))).toEqual({
      ...state
    });

    expect(editor(state, updateFile("1", undefined))).toEqual({
      ...state
    });
  });

  it("should handle SELECT_FILE action", () => {
    const state = {
      activeFileId: undefined,
      files: files
    };

    expect(editor(state, selectFile("3"))).toEqual({
      ...state,
      activeFileId: "3"
    });
  });

  it("should handle WIPE_ALL action", () => {
    expect(editor({ activeFileId: "asd", files }, wipeAll())).toEqual(
      defaultState
    );
  });
});
