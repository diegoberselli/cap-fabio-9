import { Request, Response } from "express";
import CreateStorageStoreProductService from "../services/storageStoreProducts/createStorageStoreProducts.service";
import deleteStorageStoreProductService from "../services/storageStoreProducts/deleteStorageStoreProducts.service";
import IndexStorageStoreProductService from "../services/storageStoreProducts/indexStorageStoreProducts.service";
import ListStorageStoreProductService from "../services/storageStoreProducts/listStorageStoreProducts.service";
import UpdateStorageStoreProductService from "../services/storageStoreProducts/updateStorageStoreProducts.service";
import AddProductsStorageStoreService from "../services/storageStoreProducts/addProductsStorageStore.service";

export default class StorageStoreProductController {
  static store = async (request: Request, response: Response) => {
    const { storage_quantity } = request.body;

    const storage = await CreateStorageStoreProductService.execute({
      storage_quantity,
    });
    return response.status(201).json(storage);
  };

  static list = async (request: Request, response: Response) => {
    const storages = await ListStorageStoreProductService.execute();
    return response.send(storages);
  };

  static index = async (request: Request, response: Response) => {
    const { id } = request.params;
    const storage = await IndexStorageStoreProductService.execute({ id });
    return response.status(200).json(storage);
  };

  static update = async (request: Request, response: Response) => {
    const { storage_quantity } = request.body;
    const { id } = request.params;
    const updatedStorage = await UpdateStorageStoreProductService.execute({
      storage_quantity,
      id,
    });
    return response.status(200).json(updatedStorage);
  };
  static delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const deletedStore = await deleteStorageStoreProductService.execute({ id });

    return response.status(204).json();
  };

  static async addProducts(req: Request, res: Response) {
    const { products } = req.body;
    const { branchLoggedIn } = req;

    const addedProducts = await AddProductsStorageStoreService.execute(
      {
        products,
      },
      branchLoggedIn
    );

    res
      .status(200)
      .json({
        message: "Successfully stored products",
        addedProducts: addedProducts,
      });
  }
}
