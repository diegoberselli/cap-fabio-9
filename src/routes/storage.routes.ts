import { Router } from "express";
import StorageStoreProductController from "../controllers/storageStoreProducts.controller";

const router = Router();

export const storageRouter = () => {
  router.post("", StorageStoreProductController.store);

  return router;
};
