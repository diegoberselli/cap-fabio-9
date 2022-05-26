import { Router } from "express";
import ProductController from "../controllers/product.controller";

const router = Router();

export const productRouter = () => {
  router.post("/", ProductController.store);
  router.get("/", ProductController.list);
  router.get("/:id", ProductController.index);
  router.patch("/:id", ProductController.update);
  router.delete("/:id", ProductController.delete);

  return router;
};
