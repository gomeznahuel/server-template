import { connect } from "mongoose";
import dataConfig from "./config/config";

export const dbConnection = async (): Promise<void> => {
  try {
    await connect(process.env.MONGODB_CNN as string, dataConfig);
    console.log("Database online");
  } catch (error) {
    throw new Error("Error on DB connection.");
  }
};
