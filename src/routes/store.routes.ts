import { Router } from "express";
import StoreController from "../controllers/store.controller";
import authToken from "../middlewares/authToken";
// import { expressYupMiddleware } from "express-yup-middleware";
// import createStoretValidation from "../validators/store/createStore.validation";

const router = Router();

export const storeRouter = () => {
  router.post(
    "",
    // expressYupMiddleware({ schemaValidator: createStoretValidation }),
    StoreController.store
  );
  router.post("/login", StoreController.login);
  router.get("/:id", authToken, StoreController.index);
  router.get("", authToken, StoreController.list);
  router.patch("/:id", authToken, StoreController.update);
  router.delete("/:id", authToken, StoreController.delete);

  return router;
};
