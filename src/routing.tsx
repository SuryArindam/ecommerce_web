import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./errorPage/errorPage";
import { AdminLoginRegister } from "./uiComponents/adminLoginRegister/adminLoginRegister";
import { DashboardLayout } from "./uiComponents/adminDashboard/dashboardLayout/dashboardLayout";
import { DashboardHome } from "./uiComponents/adminDashboard/dashboardHome/dashboardHome";
import { AppConstants } from "./AppConstants";
import { ProductCategory } from "./uiComponents/productManagement/productCategory/productCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home page</div>,
  },
  {
    path: AppConstants.adminOperationUrl,
    element: <AdminLoginRegister />,
  },
  {
    path: AppConstants.adminDashboardBaseUrl,
    element: <DashboardLayout />,
    children: [
      {
        path: AppConstants.adminDashboardHomeUrl,
        element: <DashboardHome />,
      },
      {
        path: AppConstants.adminDashboardUserManagementUrl,
        element: <div>User management here</div>,
      },
      {
        path: AppConstants.adminDashboardProductManagementUrl,
        element: <ProductCategory />,
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
