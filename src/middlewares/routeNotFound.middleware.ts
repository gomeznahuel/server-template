import { NextFunction, Request, Response } from "express";

export const routeNotFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({ message: "Not found" });
};
