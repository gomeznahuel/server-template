import { ProductController } from "../../controllers/products.controller";
import { HTTP_METHODS, IRoute } from "../interfaces";

export const productRoutes: IRoute[] = [
  // {
  //   path: "/products",
  //   method: HTTP_METHODS.GET,
  //   action: ProductController.getProducts,
  // },
  // {
  //   path: "/products/:id",
  //   method: HTTP_METHODS.GET,
  //   action: ProductController.getProductById,
  // },
  // {
  //   path: "/products",
  //   method: HTTP_METHODS.POST,
  //   action: ProductController.createProduct,
  // },

  {
    path: "/products",
    method: HTTP_METHODS.GET,
    action: ProductController.getAllProducts,
  },
  {
    path: "/products/:id",
    method: HTTP_METHODS.GET,
    action: ProductController.getProductById,
  },
  {
    path: "/products",
    method: HTTP_METHODS.POST,
    action: ProductController.createProduct,
  },
];
