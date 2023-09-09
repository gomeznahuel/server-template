import { DaoFactory, DaoNames } from "../dao";

export class ProductsService {
  static async getProducts() {
    try {
      const dao = DaoFactory.getDao(DaoNames.MONGODB);
      return await dao.getProducts();
    } catch (error) {
      throw error;
    }
  }

  static async getProductById(id: string) {
    try {
      const dao = DaoFactory.getDao(DaoNames.MONGODB);
      return await dao.getProductById(id);
    } catch (error) {
      throw error;
    }
  }

  static async createProduct(product: any) {
    try {
      const dao = DaoFactory.getDao(DaoNames.MONGODB);
      return await dao.createProduct(product);
    } catch (error) {
      throw error;
    }
  }
}
