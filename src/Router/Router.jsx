import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import BookDetails from "../Page/Books/BookDetails";
import About from "../Page/About/About";
import SaveBook from "../Page/SaveBook/SaveBook";
import Error from "../Page/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/data.json"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/data.json"),
        Component: BookDetails,
      },
      {
        path: "/saveBook",
        loader: () => fetch("/data.json"),
        Component: SaveBook,
      },
    ],
  },
]);
