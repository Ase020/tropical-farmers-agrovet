import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

import "./App.css";
import { Home, Layout } from "./pages";
import { Products } from "./components";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
