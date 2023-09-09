import { Request, Response } from "express";

export enum HTTP_METHODS {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
}

export interface IRoute {
  path: string;
  method: HTTP_METHODS;
  action: (req: Request, res: Response) => void;
}
