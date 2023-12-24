import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ru3umxtb157csao2.us.auth0.com"
    clientId="xObEMNekAboc2H4IEZN70SUUiQ0UIA0y"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);
