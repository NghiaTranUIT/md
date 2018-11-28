export const updateActiveFileName = name => ({
  type: "UPDATE_ACTIVE_FILE_NAME",
  payload: name
});

export const updateFileContent = content => ({
  type: "UPDATE_FILE_CONTENT",
  payload: content
});
