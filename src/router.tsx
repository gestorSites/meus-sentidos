import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Links from "./pages/Links";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Especialidade from "./pages/Especialidade";
import Profissionais from "./pages/Profissionais";
import EquipePage from "./pages/Equipe";

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
      {
        path: "especialidades/:slug",
        element: <Especialidade />,
      },
      {
        path: "profissionais/:slug",
        element: <Profissionais />,
      },
      {
        path: "profissionais",
        element: <EquipePage />,
      }
    ],
  },
  {
    path: "/links",
    element: <Links />,
    errorElement: <NotFound />,
  },
  {
    path: "/profissionais",
    element: <Links />,
    errorElement: <NotFound />,
  },
]);
