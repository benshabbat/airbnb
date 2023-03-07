import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthContextProvider } from "./context/AuthContext";
// import { UserContextProvider } from "./context/UserContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <UserContextProvider> */}
        <App />
      {/* </UserContextProvider> */}
    </AuthContextProvider>
  </React.StrictMode>
);
