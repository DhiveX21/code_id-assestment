/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "../pages/404";
import LoadingComponent from "../components/loading";

const UserPage = lazy(() => import("../pages"));
const UserDetailPage = lazy(() => import("../pages/user/userDetail"));
const PostDetailPage = lazy(() => import("../pages/post/postDetail"));
const AlbumDetailPage = lazy(() => import("../pages/album/albumDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <UserPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/:userId",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <UserDetailPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/:userId/post/:postId",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <PostDetailPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/:userId/album/:albumId",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <AlbumDetailPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
