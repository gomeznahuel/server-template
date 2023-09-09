import express, { Express } from "express";
import { json, urlencoded } from "body-parser";
import { dbConnection, initialize } from "./dao";
import { productRouter } from "./routes";
import { handleErrorMiddleware, routeNotFoundMiddleware } from "./middlewares";
import { startExpressServerWithLogging } from "./utils";

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
    this.app.use("/", productRouter);
    this.app.use(routeNotFoundMiddleware);
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
    this.listen();
    this.errorHandler();
  }
}
