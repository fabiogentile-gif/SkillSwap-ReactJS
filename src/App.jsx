import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SkillPage from "./SkillPage";
import Home from "./pages/Home";
import BasicLayout from "./layout/BasicLayout";
import Descrizione from "./pages/Descrizione";
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
    {
    path: "/descrizione",
    element: <Descrizione />
  }
  ]
}  
]);

export default App;
