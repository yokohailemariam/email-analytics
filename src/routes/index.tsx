import { createHashRouter } from "react-router-dom";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import Dashboard from "@/pages/dashboard/dashboard";
import Search from "@/pages/search/Search";
import Landing from "@/pages/landing/Landing";
import Sidebar from "@/components/Sidebar";

export const router = createHashRouter([
  {
    path: "/auth",
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
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
