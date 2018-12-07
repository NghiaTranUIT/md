export const updateFile = (id, name, content) => ({
  type: "UPDATE_FILE",
  payload: {
    id,
    name,
    content
  }
});

export const createNewFile = (id, name, content) => ({
  type: "CREATE_NEW_FILE",
  payload: {
    id,
    name,
    content
  }
});

export const selectFile = id => ({
  type: "SELECT_FILE",
  payload: {
    id
  }
});

export const deleteFile = id => ({
  type: "DELETE_FILE",
  payload: {
    id
  }
});

export const wipeAll = () => ({
  type: "WIPE_ALL"
});
