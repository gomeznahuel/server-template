import { Router } from "express";
import { IRoute } from "../interfaces";

/**
 * Function to generate a reusable router for a set of routes.
 * @param {IRoute[]} routes - An array of route definitions.
 * @returns {Router} - An Express.js router with the defined routes.
 */

export function createRouter(routes: IRoute[]): Router {
  const router = Router();

  for (const route of routes) {
    router[route.method](route.path, route.action);
  }

  return router;
}
