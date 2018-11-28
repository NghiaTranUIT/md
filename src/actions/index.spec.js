import * as actions from "./index";

describe("updateActiveFileName", () => {
  it("should create UPDATE_ACTIVE_FILE_NAME action", () => {
    expect(actions.updateActiveFileName("new name")).toEqual({
      type: "UPDATE_ACTIVE_FILE_NAME",
      payload: "new name"
    });
  });
});

describe("updateFileContent", () => {
  it("should create UPDATE_FILE_CONTENT action", () => {
    expect(actions.updateFileContent("abc")).toEqual({
      type: "UPDATE_FILE_CONTENT",
      payload: "abc"
    });
  });
});
