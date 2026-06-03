import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SkillPage from "./SkillPage";
import Home from "./Home";
import BasicLayout from "./layout/BasicLayout";
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
      element: <SkillPage/>
    },
  ]
}  
]);

export default App;
