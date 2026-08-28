import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Links from "./pages/Links";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Especialidade from "./pages/Especialidade";
import Profissionais from "./pages/Profissionais";
import EquipePage from "./pages/Equipe";
import EmpresasPage from "./pages/Empresas";

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
        path: "especialidades",
        element: <Especialidade />,
      },
      {
        path: "profissionais/:slug",
        element: <Profissionais />,
      },
      {
        path: "profissionais",
        element: <EquipePage />,
      },
      {
        path: "empresas",
        element: <EmpresasPage />,
      }
    ],
  },
  {
    path: "/links",
    element: <Links />,
    errorElement: <NotFound />,
  },
], {
  basename: import.meta.env.BASE_URL,
});
