import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./Pages/Page1";

import { DataProvider } from "./context/Datacontext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Pages/page1",
    element: <Page1 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
