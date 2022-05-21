import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) =>
    console.error("Error during data source initialization", err)
  );

  const port = process.env.PORT;

  app.listen(port || 3000, () => {
    console.log(`Running at ${port}`);
  });
})();
