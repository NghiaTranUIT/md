export const defaultState = {
  activeFileId: null,
  files: {}
};

const editor = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE_NEW_FILE":
      return {
        ...state,
        activeFileId: action.payload.id,
        files: {
          ...state.files,
          [`${action.payload.id}`]: {
            name: action.payload.name,
            content: action.payload.content
          }
        }
      };
    case "UPDATE_FILE":
      const { id, name, content } = action.payload;
      const file = state.files[id];
      if (file == null) return state;

      return {
        ...state,
        files: {
          ...state.files,
          [`${id}`]: {
            name: name || file.name,
            content: content || file.content
          }
        }
      };

    case "SELECT_FILE":
      return {
        ...state,
        activeFileId: action.payload.id
      };

    case "WIPE_ALL":
      return defaultState;
    default:
      return state;
  }
};

export default editor;
