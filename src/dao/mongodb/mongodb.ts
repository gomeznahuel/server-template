import Product from "../../databases/mongodb/models/product.model";

class MongoDBDao {
  async getProducts() {
    return await Product.find();
  }

  async getProductById(id: string) {
    return await Product.findById(id);
  }

  async createProduct(product: any) {
    return await Product.create(product);
  }
}

const mongoDBDao = new MongoDBDao();
export { mongoDBDao };
