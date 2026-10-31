import { createBrowserRouter } from "react-router";
import Register from "./pages/auth/Register";
import RootLayout from "./ui/layouts/RootLayout";
import AuthLayout from "./ui/layouts/AuthLayout";
import Login from "./pages/auth/Lgoin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);
