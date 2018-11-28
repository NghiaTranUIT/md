const defaultState = {
  activeFileId: null,
  files: []
};

const editor = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE_NEW_FILE":
      return {
        ...state,
        activeFileId: action.payload.id,
        files: [
          ...state.files,
          {
            id: action.payload.id,
            name: action.payload.name,
            content: action.payload.content
          }
        ]
      };
    case "UPDATE_FILE":
      const { id, name, content } = action.payload;
      const idx = state.files.findIndex(f => f.id === id);
      if (idx === -1) return state;

      const newFiles = [...state.files];
      newFiles[idx].name = name || newFiles[idx].name;
      newFiles[idx].content = content || newFiles[idx].content;
      return { ...state, files: newFiles };
    default:
      return state;
  }
};

export default editor;
