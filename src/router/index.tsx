/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ErrorPage from "../pages/404";

const UserPage = lazy(() => import("../pages"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
