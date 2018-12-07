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
  it("selectFile should create SELECT_FILE action", () => {
    expect(actions.selectFile("1")).toEqual({
      type: "SELECT_FILE",
      payload: {
        id: "1"
      }
    });
  });
  it("deleteFile should create DELETE_FILE action", () => {
    expect(actions.deleteFile("1")).toEqual({
      type: "DELETE_FILE",
      payload: {
        id: "1"
      }
    });
  });
  it("wipeAll should create WIPE_ALL action", () => {
    expect(actions.wipeAll()).toEqual({
      type: "WIPE_ALL"
    });
  });
});
