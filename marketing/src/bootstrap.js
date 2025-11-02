import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { createMemoryHistory } from "history";

// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  console.log(history);
  if (onNavigate) {
    history.listen((update) => {
      console.log(update);
      onNavigate({ pathname: update.location.pathname });
    });
  }
  const root = createRoot(el);
  root.render(<App history={history} />);
};

// If we are development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//We are running through container and we should export the mount function
export { mount };
