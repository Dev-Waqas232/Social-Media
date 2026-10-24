import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

import { getToken } from "../../utils/localstorage";

export default function RootLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();

    if (!token) navigate("/auth/register");
  }, []);

  return <Outlet />;
}
