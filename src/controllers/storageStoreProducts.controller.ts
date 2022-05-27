import { Request, Response } from "express";
import AddProductsStorageStoreService from "../services/storageStoreProducts/addProductsStorageStore.service";

import UpdateStorageStoreService from "../services/storageStoreProducts/updateStorageStore.service";
import DeleteProductStorageService from "../services/storageStoreProducts/deleteProductStorage.service";

export default class StorageStoreProductController {
  static async addProducts(req: Request, res: Response) {
    const { products } = req.body;
    const { branchLoggedIn } = req;

    const addedProducts = await AddProductsStorageStoreService.execute(
      {
        products,
      },
      branchLoggedIn
    );

    res.status(200).json({
      message: "Successfully stored products",
      addedProducts: addedProducts,
    });
  }

  static async update(req: Request, res: Response) {
    const { id_product_storage, quantity, price } = req.body;
    const { branchLoggedIn } = req;

    const productUpdated = await UpdateStorageStoreService.execute(
      id_product_storage,
      quantity,
      price,
      branchLoggedIn
    );

    res.status(200).json({
      message: "Successfully apdated",
      productUpdated: productUpdated,
    });
  }

  static async delete(req: Request, res: Response) {
    const { id_product_storage } = req.params;

    const productDeleted = await DeleteProductStorageService.execute(
      id_product_storage
    );

    res.status(200).json({
      message: "Product deleted successfully",
      productDeleted: productDeleted,
    });
  }
}
