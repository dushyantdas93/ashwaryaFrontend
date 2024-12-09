
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/auth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);


createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <Toaster />
  </AuthProvider>
);
