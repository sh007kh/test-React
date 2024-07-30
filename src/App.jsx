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
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
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
