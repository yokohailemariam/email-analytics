import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/auth",
    children: [
      { path: "/auth/login", index: true, element: <LoginPage /> },
      { path: "/auth/register", element: <RegisterPage /> },
    ],
  },
]);
