import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Links from "./pages/Links";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/links",
    element: <Links />,
    errorElement: <NotFound />,
  },
]);
