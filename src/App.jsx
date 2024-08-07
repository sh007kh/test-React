import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Landing,
  Error,
  Cocktail,
  NewsLetter,
  HomeLayout,
  SingleError,
} from "./pages";
import { loader as LandingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SingleError />,
        loader: LandingLoader,
      },
      {
        path: "cocktail/:id",
        errorElement: <SingleError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
      },

      {
        path: "error",
        element: <Error />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={Router} />;
};
export default App;
