import { Express } from "express";
import { storeRouter } from "./store.routes";
import { orderRouter } from "./order/order.routes";

export const appRoutes = (app: Express) => {
  app.use("/store", storeRouter());
  app.use("/order", orderRouter());
};
