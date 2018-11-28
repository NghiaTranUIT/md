const defaultState = {
  fileName: "Untitled.md",
  content: ""
};

const editor = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_ACTIVE_FILE_NAME":
      return { ...state, fileName: action.payload };
    default:
      return state;
  }
};

export default editor;
