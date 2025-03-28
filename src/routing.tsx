import { createBrowserRouter } from "react-router-dom";
import { AdminLogin } from "./uiComponents/adminLogin/adminLogin";
import { AdminRegister } from "./uiComponents/adminRegister/adminRegister";
import { ErrorPage } from "./errorPage/errorPage";
// import { AdminDashboard } from "./uiComponents/adminDashboard/adminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home page</div>,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/adminregister",
    element: <AdminRegister />,
  },
  { path: "*", element: <ErrorPage /> },
]);
