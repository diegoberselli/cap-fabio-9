import { Router } from "express";
import StoreController from "../controllers/store.controller";
import { expressYupMiddleware } from "express-yup-middleware";
// import createStoretValidation from "../validators/store/createStore.validation";

const router = Router();

export const storeRouter = () => {
  router.post(
    "",
    // expressYupMiddleware({ schemaValidator: createStoretValidation }),
    StoreController.store
  );
  router.get("", StoreController.list);
  router.get("/:id", StoreController.index);
  router.get("/orders/:id", StoreController.indexOrders);
  router.patch("/:id", StoreController.update);
  router.delete("/:id", StoreController.delete);

  return router;
};
