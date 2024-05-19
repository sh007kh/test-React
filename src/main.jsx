import { React, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import App from "./App.jsx";
import "./index.css";
import "virtual:windi.css";
import { AppProvider } from "./components/projects/Menus/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
