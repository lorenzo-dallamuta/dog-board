import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import { ModalProvider } from "./context/modalContext";

ReactDOM.render(
  <Router>
    {/* <ModalProvider> */}
      <App />
    {/* </ModalProvider> */}
  </Router>,
  document.getElementById("root")
);
