import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Category from "./pages/Category"
import Home from "./pages/Home";

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: "/categoria/:id", element: <Category /> }
]);

export default App;
