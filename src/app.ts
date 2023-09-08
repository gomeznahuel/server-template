import express, { Express } from "express";
import dotenv from "dotenv";
import { json, urlencoded } from "body-parser";
import { dbConnection } from "./databases";
import { initialize } from "./databases/mysql";
import { productRoutes } from "./routes/product.route";
import { handleErrorMiddleware } from "./middlewares";
import { startExpressServerWithLogging } from "./utils";

dotenv.config();

export class Server {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  }

  private configureMiddleware() {
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private async connectToDatabase() {
    await dbConnection();
    initialize();
  }

  private setupRoutes() {
    this.app.use("/", productRoutes);
  }

  private async listen() {
    await startExpressServerWithLogging(this.app, this.port);
  }

  private errorHandler() {
    handleErrorMiddleware(this.app);
  }

  public start() {
    this.configureMiddleware();
    this.setupRoutes();
    this.connectToDatabase();
    this.errorHandler();
    this.listen();
  }
}
