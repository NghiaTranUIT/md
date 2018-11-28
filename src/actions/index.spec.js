import * as actions from "./index";

describe("editor actions", () => {
  it("updateFile should create UPDATE_FILE action", () => {
    expect(actions.updateFile("someId", "some name", "some content")).toEqual({
      type: "UPDATE_FILE",
      payload: {
        id: "someId",
        name: "some name",
        content: "some content"
      }
    });
  });
  it("createNewFile should create CREATE_NEW_FILE action", () => {
    expect(actions.createNewFile("id", "name", "some content")).toEqual({
      type: "CREATE_NEW_FILE",
      payload: {
        id: "id",
        name: "name",
        content: "some content"
      }
    });
  });
});
