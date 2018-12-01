import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import localForage from "localforage";
import rootReducer from "./reducers";

localForage.config({
  storeName: "md"
});

const persistConfig = {
  key: "root",
  storage: localForage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
