import { Express, NextFunction, Request, Response } from "express";

const handleErrorMiddleware = (app: Express) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(err.message);
  });
};

export default handleErrorMiddleware;
