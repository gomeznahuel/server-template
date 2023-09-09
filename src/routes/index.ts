// import { Router } from "express";
// import { IRoute, HTTP_METHODS } from "./interface/route.interface";
// import { ProductController } from "../controllers/products.controller";

// const productRoutes: IRoute[] = [
//   {
//     path: "/products",
//     method: HTTP_METHODS.GET,
//     action: ProductController.getProducts,
//   },
//   {
//     path: "/products/:id",
//     method: HTTP_METHODS.GET,
//     action: ProductController.getProductById,
//   },
//   {
//     path: "/products",
//     method: HTTP_METHODS.POST,
//     action: ProductController.createProduct,
//   },
// ];

// const router = Router();

// for (const route of productRoutes) {
//   router[route.method](route.path, route.action);
// }

// export { router as productRouter };

import { createRouter } from "./createRouter";
import { productRoutes } from "./routes/product.routes";

// Create the product router using the createRouter function
const productRouter = createRouter(productRoutes);

export { productRouter };
