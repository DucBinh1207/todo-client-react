// import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
// import App1 from "./App1.tsx";
import {
  BrowserRouter,
  //   createBrowserRouter,
  //   RouterProvider,
} from "react-router-dom";
import AppRouter from "./AppRouter.tsx";

import { Provider } from "react-redux";
import store from "./store/index.ts";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {},
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <RouterProvider router={router} />,
// );
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
);
