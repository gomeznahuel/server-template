import { Express } from "express";

const startExpressServerWithLogging = (app: Express, port: number) => {
  return new Promise<void>((resolve) => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
      resolve();
    });
  });
};

export default startExpressServerWithLogging;
