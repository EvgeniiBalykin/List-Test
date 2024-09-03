import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import List from "./features/list/List";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <List />
    </Provider>
  </React.StrictMode>
);
