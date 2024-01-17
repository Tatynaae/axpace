import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import { MyProjectsProvider } from "./context/MyProjectsContext";
import Layout from "./components/Layout";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <Layout>
        <MyProjectsProvider>
          <App />
        </MyProjectsProvider>
      </Layout>
    </ThemeContextProvider>
  </BrowserRouter>
);
