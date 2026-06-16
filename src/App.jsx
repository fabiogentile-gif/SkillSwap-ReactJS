import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Category from "./pages/Category";
import Home from "./pages/Home";
import BasicLayout from "./layout/BasicLayout";
import Skill from "./pages/Skill";
import SearchResult from "./pages/SearchResult";
import UserPage from "./pages/UserPage.jsx"
import SKillPage from "./SkillPage.jsx"

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/categoria/:id",
        element: <Category />,
      },
      {
        path: "/skill/:id",
        element: <Skill />,
      },
      {
        path: "/user/:id",
        element: <UserPage />
      },
      {
        path: "/search",
        element: <SearchResult />
      },
      {
        path: "/skillpage",
        element: <SKillPage/>
      },
    ]
  }
]);

export default App;
