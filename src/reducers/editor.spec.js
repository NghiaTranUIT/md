import editor from "./editor";
import { updateActiveFileName, updateFileContent } from "../actions";

describe("editor reducer", () => {
  it("should handle initial state", () => {
    expect(editor(undefined, {})).toEqual({
      fileName: "Untitled.md",
      content: ""
    });
  });

  it("should handle UPDATE_ACTIVE_FILE_NAME action", () => {
    expect(
      editor({ fileName: "some name" }, updateActiveFileName("new name"))
    ).toEqual({
      fileName: "new name"
    });
  });

  it("should handle UPDATE FILE CONTENT action", () => {
    expect(editor({ content: "" }, updateFileContent("new content"))).toEqual({
      content: "new content"
    });
  });
});
