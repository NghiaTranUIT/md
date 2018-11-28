import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { loadState, saveState } from "./storages/localStorage";
import throttle from "lodash/throttle";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
