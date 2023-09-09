// Import MySQL
import mysql from "mysql";

// Import dotenv
import dotenv from "dotenv";

// Load dotenv
dotenv.config();

// Create MySQL connection
export const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST as string,
  user: process.env.MYSQL_USER as string,
  password: process.env.MYSQL_PASSWORD as string,
  database: process.env.MYSQL_DBNAME as string,
});

export const initialize = () => {
  connection.connect((err) => {
    if (err) throw err;
    console.log("MySQL connected...");
  });
};
