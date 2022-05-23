import { storageRouter } from './storage.routes';
import { Express } from "express";
import { storeRouter } from "./store.routes";

export const appRoutes = (app: Express) => {
  app.use("/store", storeRouter());
  app.use("/storage", storageRouter())
};
