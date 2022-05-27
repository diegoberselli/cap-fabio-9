import { Router } from "express";
import StorageStoreProductController from "../controllers/storageStoreProducts.controller";
import authToken from "../middlewares/authToken";

const router = Router();

export const storageRouter = () => {
  router.post("", StorageStoreProductController.store);
  router.delete(
    "/delete/:id_product_storage",
    authToken,
    StorageStoreProductController.delete
  );
  router.post("/add", authToken, StorageStoreProductController.addProducts);

  router.patch("/update", authToken, StorageStoreProductController.update);

  return router;
};
