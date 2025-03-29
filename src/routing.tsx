import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./errorPage/errorPage";
import { AdminLoginRegister } from "./uiComponents/adminLoginRegister/adminLoginRegister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home page</div>,
  },
  {
    path: "/adminoperation",
    element: <AdminLoginRegister />,
  },

  { path: "*", element: <ErrorPage /> },
]);
