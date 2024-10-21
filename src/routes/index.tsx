import { createHashRouter } from "react-router-dom";
import Dashboard from "@/pages/dashboard/dashboard";
import Search from "@/pages/search/Search";
import Landing from "@/pages/landing/Landing";
import Sidebar from "@/components/Sidebar";
import Auth from "@/pages/auth/auth";

export const router = createHashRouter([
  {
    path: "/auth",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);
