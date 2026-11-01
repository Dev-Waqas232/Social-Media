import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <section className="bg-surface min-h-screen flex flex-col justify-center items-center w-full">
      <Outlet />
    </section>
  );
}
