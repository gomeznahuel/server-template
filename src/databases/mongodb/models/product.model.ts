import { model, Schema } from "mongoose";
import { IProduct } from "../interfaces/product.interface";
import { reusableSchemaMethods } from "../utils";

const ProductSchema: Schema = new Schema<IProduct>({
  uid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: Boolean, default: true },
});

reusableSchemaMethods(ProductSchema, ["__v"]);

const Product = model<IProduct>("Product", ProductSchema);
export default Product;
