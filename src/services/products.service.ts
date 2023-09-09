// import Product from "../dao/Products.dao";
import ProductFromMySQL from "../dao/Products.dao.sql";
import ProductRepository from "../repository/ProductRepository";

export const ProductService = new ProductRepository(new ProductFromMySQL());
