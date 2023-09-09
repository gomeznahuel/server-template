import { connection } from "./sql/index";

export default class ProductFromMySQL {
  get = async (params: Record<string, any>) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM productos_tabla", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  };

  getById = async (id: string) => {
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
  };

  save = async (data: Record<string, any>) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO productos_tabla SET ?",
        [data],
        (err, results) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  };
}
