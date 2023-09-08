// Import MySQL
import mysql from "mysql";

// Create MySQL connection
export const connection = mysql.createConnection({
  host: "localhost",
  user: "almanoduerme",
  password: "Coderhouse",
  database: "productos",
});

export const initialize = () => {
  connection.connect((err) => {
    if (err) throw err;
    console.log("MySQL connected...");
  });
};
