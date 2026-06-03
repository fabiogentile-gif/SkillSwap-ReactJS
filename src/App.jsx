import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SkillPage from "./pages/SkillPage"
import Home from "./pages/Home";

function App() {
return <RouterProvider router={router} />;
}

const router = createBrowserRouter([{ path: '/', element:<Home />},
  {path: "/informatica", element:<SkillPage />}
]);

export default App;
