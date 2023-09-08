import { connection } from "../../databases/mysql";

class MySQLDao {
  async getProducts() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM productos_tabla", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  async getProductById(id: string) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM productos_tabla WHERE id_producto = ?",
        [id],
        (err, results) => {
          if (err) {
            reject(err);
          } else resolve(results);
        }
      );
    });
  }

  async createProduct(product: any) {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO productos_tabla SET ?",
        [product],
        (err, results) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  }
}

const mySQLDao = new MySQLDao();
export { mySQLDao };
