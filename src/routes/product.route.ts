import { Router, Request, Response } from "express";
import { ProductController } from "../controllers/products.controller";

enum HTTP_METHODS {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

interface Route {
  path: string;
  method: HTTP_METHODS;
  action: (req: Request, res: Response) => void;
}

const allTheRoutes: Route[] = [
  {
    path: "/products",
    method: HTTP_METHODS.GET,
    action: ProductController.getProducts,
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

const router = Router();

allTheRoutes.forEach((route) => {
  router[route.method](route.path, route.action);
});

export { router as productRoutes };
