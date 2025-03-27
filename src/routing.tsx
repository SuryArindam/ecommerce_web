import { createBrowserRouter } from "react-router-dom";
import { AdminLogin } from "./uiComponents/adminLogin/adminLogin";
import { ErrorPage } from "./errorPage/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home page</div>,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  { path: "*", element: <ErrorPage /> },
]);
