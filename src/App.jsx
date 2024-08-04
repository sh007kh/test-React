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
import { Loader as LandingLoader } from "./pages/Landing";
const App = () => {
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
        {
          path: "cocktail",
          element: <Cocktail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={Router} />;
};
export default App;
