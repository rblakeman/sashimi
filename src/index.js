import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from "./library";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
