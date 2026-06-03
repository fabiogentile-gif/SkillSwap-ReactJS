import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainCatButton from "./components/MainCategoryButton";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PopolariBanner from "./components/PopolariBanner";
import Card from "./components/Card";
import HeaderMain from "./components/HeaderMain";
import FooterBox from "./components/FooterBox";
import SkillPage from "./SkillPage"
import Home from "./Home";
function App() {
return <RouterProvider router={router} />;
}

const router = createBrowserRouter([{ path: '/', element:<Home />},
  {path: "/informatica", element:<SkillPage />}
]);

export default App;
