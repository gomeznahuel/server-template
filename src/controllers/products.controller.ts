import { Request, Response } from "express";
// import { ProductsService } from "../services/products.service";
import { ProductService } from "../services/productos.service";

export class ProductController {
  // static async getProducts(req: Request, res: Response) {
  //   try {
  //     const products = await ProductsService.getProducts();

  //     if (!products) {
  //       return res.status(404).json({ message: "Products not found" });
  //     }

  //     return res.status(200).json(products);
  //   } catch (error) {
  //     return res.status(500).json({ error: "Internal server error" });
  //   }
  // }

  // static async getProductById(req: Request, res: Response) {
  //   try {
  //     const { id } = req.params;

  //     const product = await ProductsService.getProductById(id);

  //     if (!product) {
  //       return res.status(404).json({ message: "Product not found" });
  //     }

  //     return res.status(200).json(product);
  //   } catch (error) {
  //     return res.status(500).json({ error: "Internal server error" });
  //   }
  // }

  // static async createProduct(req: Request, res: Response) {
  //   try {
  //     const product = await ProductsService.createProduct(req.body);

  //     return res.status(200).json(product);
  //   } catch (error) {
  //     return res.status(500).json({ error: "Internal server error" });
  //   }
  // }

  // With DAO.
  static async getAllProducts(req: Request, res: Response) {
    const products = await ProductService.getAll({});
    return res.status(200).json(products);
  }

  static async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    const product = await ProductService.getById(id);
    return res.status(200).json(product);
  }

  static async createProduct(req: Request, res: Response) {
    const product = await ProductService.create(req.body);
    return res.status(200).json(product);
  }
}
