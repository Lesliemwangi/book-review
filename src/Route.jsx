import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Books from "./components/Books";
import BookDetails from "./pages/BookDetails";
// import AboutUs from "./components/AboutUs";
// import Contacts from "./components/Contacts";
// import News from "./components/News";
// import NewsDetails from "./pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "books/:id",
        element: <BookDetails />,
      },
    //   {
    //     path: "/about",
    //     element: <AboutUs />,
    //   },
    //   {
    //     path: "/news",
    //     element: <News />,
    //   },
    //   {
    //     path: "/news/:id",
    //     element: <NewsDetails />,
    //   },
    //   {
    //     path: "/contacts",
    //     element: <Contacts />,
    //   },
    ],
  },
]);

export { router };
