import { Router } from "express";
import OrderController from "../controllers/order.controller";
// import createOrdertValidation from "../validators/order/createOrder.validation";
import { expressYupMiddleware } from "express-yup-middleware";

const router = Router();

export const orderRouter = () => {
  router.post(
    "",
    // expressYupMiddleware({ schemaValidator: createOrdertValidation }),
    OrderController.create
  );
  router.get("", OrderController.showAll);
  console.log("routes");
  router.get("", OrderController.show);
  router.delete("/delete", OrderController.delete);
  router.get("/status/:status", OrderController.showStatus);
  router.patch("/:id", OrderController.update);
  router.delete("/:id", OrderController.delete);
  return router;
};
