import { Outlet } from "react-router";

export const LoginLayout = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-3 flex justify-center items-center">
      <Outlet />
    </main>
  )
}
