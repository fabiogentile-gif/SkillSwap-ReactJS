import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Category from "./pages/Category"
import Home from "./pages/Home";
import BasicLayout from "./layout/BasicLayout";
import Skill from "./pages/Skill";
function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {path:"/",
  element: <BasicLayout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "/informatica",
      element: <Category/>
    },
    {
    path: "/skill",
    element: <Skill />
  },
  ]
}  
]);

export default App;
