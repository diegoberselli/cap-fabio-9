import { Router } from "express";
import StoreController from "../controllers/store.controller";

const router = Router();

export const storeRouter = () => {
  router.post("", StoreController.store);
  router.get("", StoreController.list);
  router.get("/:id", StoreController.index);
  router.patch("/:id", StoreController.update);
  router.delete("/:id", StoreController.delete);

  return router;
};
