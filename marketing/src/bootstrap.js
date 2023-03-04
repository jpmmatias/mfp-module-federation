import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  if (!el) {
    return
  }
  ReactDOM.render(<App />, el);
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#marketing-root");
  mount(el);
}

export { mount };
