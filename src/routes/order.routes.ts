import { Router } from "express";
import OrderController from "../controllers/order.controller";
import createOrdertValidation from "../validators/order/createOrder.validation";
import { expressYupMiddleware } from "express-yup-middleware";

const router = Router();

export const orderRouter = () => {
  router.post(
    "",
    expressYupMiddleware({ schemaValidator: createOrdertValidation }),
    OrderController.create
  );
  router.get("", OrderController.showAll);
  router.get("", OrderController.show);
  router.get("/update", OrderController.update);
  router.delete("/delete", OrderController.delete);
  return router;
};
