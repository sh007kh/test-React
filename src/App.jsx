import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Landing,
  Error,
  Cocktail,
  NewsLetter,
  HomeLayout,
} from "./pages";
const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return <RouterProvider router={Router} />;
};
export default App;
