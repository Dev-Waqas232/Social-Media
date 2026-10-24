import { createBrowserRouter } from "react-router";
import Register from "./pages/auth/Register";
import RootLayout from "./ui/layouts/RootLayout";
import AuthLayout from "./ui/layouts/AuthLayout";

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
        ],
      },
    ],
  },
]);
