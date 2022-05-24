import { storageRouter } from './storage.routes';
import { Express } from "express";

import { productRouter } from "./product.routes";
import { storeRouter } from "./store.routes";
import { orderRouter } from "./order/order.routes";
import { storageCDRouter } from './storageCD.routes';

export const appRoutes = (app: Express) => {
  app.use("/store", storeRouter());
  app.use("/storage", storageRouter())
  app.use("/order", orderRouter());
  app.use("/products", productRouter());
  app.use('/storage_cd', storageCDRouter());
};
