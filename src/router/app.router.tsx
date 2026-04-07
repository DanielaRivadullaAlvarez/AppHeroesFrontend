import { createHashRouter, Navigate } from "react-router";
import { lazy, Suspense, type JSX } from "react";

import { AdminLayouts } from "@/admin/layouts/AdminLayouts";
import { HeroesLayouts } from "@/heroes/layouts/HeroesLayouts";
import { HomePage } from "@/heroes/pages/home/HomePage";


// import { AdminPage } from "@/admin/pages/AdminPage";
// import { HeroPage } from "@/heroes/pages/hero/HeroPage";
// import { SearchPage } from "@/heroes/pages/search/SearchPage";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));
const HeroPage = lazy(() => import("@/heroes/pages/hero/HeroPage"));
const AdminPage = lazy(() => import("@/admin/pages/AdminPage"));

// Wrapper para Suspense
const SuspenseWrapper = (Component: JSX.Element) => (
  <Suspense fallback={<div>Cargando...</div>}>{Component}</Suspense>
);

// export const appRouter = createBrowserRouter([
export const appRouter = createHashRouter([
{
    path: "/",
    element: <HeroesLayouts />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "heroes/:idSlug",
        element: SuspenseWrapper(<HeroPage />),
      },
      {
        path: "search",
        element: SuspenseWrapper(<SearchPage />),
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayouts />,
    children: [
      {
        index: true,
        element: SuspenseWrapper(<AdminPage />),
      },
    ],
  },
]);
