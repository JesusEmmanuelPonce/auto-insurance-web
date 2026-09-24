import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Login } from "./features/login/Login.tsx"
import { LoginLayout } from "./features/login/components/LoginLayout.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      { path: 'login', Component: Login },
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
