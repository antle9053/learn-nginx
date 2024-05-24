import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/content",
    element: <div>Content</div>,
  },
  {
    path: "/products/:id",
    element: <div>Products</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
