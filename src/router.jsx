import { createBrowserRouter } from "react-router-dom";
import { UsuariosAdmin } from "./components/usuario-admin";
import { Admin } from "./components/admin-home";
import ClientHome from "./components/client-home";
import Login from "./components/auth/login";
import { Teste } from "./components/teste";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <ClientHome />,
  },
  {
    path: "/home/admin",
    element: <Admin />,
  },
  {
    path: "/usuarios/admin",
    element: <UsuariosAdmin />,
  },
  {
    path: "/produtos/admin",
    element: <Teste />,
  },
]);

export default router;
