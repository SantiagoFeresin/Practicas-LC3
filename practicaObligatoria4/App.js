import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "*", element: <Navigate to="/" /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
