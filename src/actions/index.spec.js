import * as actions from "./index";

describe("updateActiveFileName", () => {
  it("should create UPDATE_ACTIVE_FILE_NAME action", () => {
    expect(actions.updateActiveFileName("new name")).toEqual({
      type: "UPDATE_ACTIVE_FILE_NAME",
      payload: "new name"
    });
  });
});
