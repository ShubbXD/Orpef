import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ComponentLoader from "./components/ComponentLoader.jsx";

const router = createBrowserRouter([{ apth: "/", element: <App /> }]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter router={router}>
      <ComponentLoader>
        <App />
      </ComponentLoader>
    </BrowserRouter>
  </StrictMode>
);
