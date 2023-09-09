import { Request, Response } from "express";
import { ProductService } from "../services/products.service";

export class ProductController {
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
