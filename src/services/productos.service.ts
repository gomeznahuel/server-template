import Product from "../dao/Products.dao";
import ProductRepository from "../repository/ProductRepository";

export const ProductService = new ProductRepository(new Product());
