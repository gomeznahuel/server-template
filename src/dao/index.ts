import { mongoDBDao } from "./mongodb/mongodb";
import { mySQLDao } from "./mysql/mysql";

export enum DaoNames {
  MONGODB = "mongodb",
  MYSQL = "mysql",
}

export class DaoFactory {
  static getDao(daoName: DaoNames) {
    switch (daoName) {
      case "mongodb":
        return mongoDBDao;
      case "mysql":
        return mySQLDao;
      default:
        throw new Error("Dao not found");
    }
  }
}
