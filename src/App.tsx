import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RouterLayout from "./components/router/RouterLayout";
import Products from "./components/Products";
import CartProducts from "./components/CartProducts";
import Error from "./components/shared/Error";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <CartProducts />,
        },
      ],
    },
    { path: "*", element: <Error /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
