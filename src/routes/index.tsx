import { createHashRouter } from "react-router-dom";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";

export const router = createHashRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/auth",
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
