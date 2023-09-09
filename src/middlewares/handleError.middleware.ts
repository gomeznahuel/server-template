import { Express, NextFunction, Request, Response } from "express";

export const handleErrorMiddleware = (app: Express) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(err.message);
  });
};
