import { storageRouter } from "./storage.routes";
import { Express } from "express";

import { productRouter } from "./product.routes";
import { storeRouter } from "./store.routes";
import { orderRouter } from "./order.routes";
import { CDRouter } from "./CD.routes";
import { depotCDRouter } from "./depotCD.routes";

export const appRoutes = (app: Express) => {
  app.use("/store", storeRouter());
  app.use("/storage", storageRouter());
  app.use("/order", orderRouter());
  app.use("/products", productRouter());
  app.use("/cd", CDRouter());
  app.use("/depot_cd", depotCDRouter());
};
