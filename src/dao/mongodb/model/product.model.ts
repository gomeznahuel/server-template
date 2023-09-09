import { model, Schema } from "mongoose";
import { IProduct } from "../interfaces/product.interface";
import { applyReusableSchemaMethods } from "../utils";

const ProductSchema: Schema<IProduct> = new Schema<IProduct>({
  name: { type: String, required: true, index: true },
  description: { type: String },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: Boolean, default: true },
});

applyReusableSchemaMethods(ProductSchema, ["__v"]);

const productModel = model<IProduct>("Product", ProductSchema);
export default productModel;
