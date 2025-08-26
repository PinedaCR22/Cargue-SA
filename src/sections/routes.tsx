// React Router (Data APIs)
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage";
import MainLayout from "../layout/mainlayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
  // aquí puedes agregar más rutas
]);

export default router;
