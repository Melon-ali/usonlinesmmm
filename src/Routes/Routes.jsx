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

      // {
      //     path: "/buy-usa-facebook-acount",
      //     element: <UsaFacebookAcount />
      // },
      // {
      //     path: "/paddhosuchis",
      //     element: <Paddhosuchis></Paddhosuchis>
      // },
      // {
      //     path: "/mojibs",
      //     element: <MojibHome></MojibHome>
      // },
      // {
      //     path: "/allTeachers",
      //     element: <Teachers></Teachers>
      // },
    ],
  },
]);

export default router;
