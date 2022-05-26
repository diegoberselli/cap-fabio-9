import { Router } from "express";
import StorageStoreProductController from "../controllers/storageStoreProducts.controller";
import authToken from "../middlewares/authToken";

const router = Router();

export const storageRouter = () => {
  router.post("", StorageStoreProductController.store);
  router.get("", StorageStoreProductController.list);
  router.get("/:id", StorageStoreProductController.index);
  router.patch("/:id", StorageStoreProductController.update);
  router.delete("/:id", StorageStoreProductController.delete);

  router.post("/add", authToken, StorageStoreProductController.addProducts);

  return router;
};
