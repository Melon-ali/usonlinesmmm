import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Products/Products";
// import UsaFacebookAcount from "../Pages/SocialServices/UsaFacebookAcount";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:title",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
