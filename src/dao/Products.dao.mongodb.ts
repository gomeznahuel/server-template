import productModel from "./mongodb/model/product.model";
import { IProduct } from "./mongodb/interfaces/product.interface";

export default class Product {
  get = (params: Record<string, any>) => {
    return productModel.find(params);
  };

  getById = (id: string) => {
    return productModel.findById(id);
  };

  save = (data: IProduct) => {
    return productModel.create(data);
  };

  update = (id: string, doc: Record<string, any>) => {
    return productModel.findByIdAndUpdate(id, { $set: doc });
  };

  delete = (id: string) => {
    return productModel.findByIdAndDelete(id);
  };
}
