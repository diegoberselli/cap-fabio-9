import { IStorageStoreProduct } from "./../../interfaces/storageStoreProducts/index";
import { AppDataSource } from "../../data-source";
import { Storage } from "../../entities/storageStoreProducts";
import { AppError } from "../../errors/AppError";

export default class UpdateStorageStoreProductService {
  static execute = async ({ id, storage_quantity }: IStorageStoreProduct) => {
    const storeRepository = AppDataSource.getRepository(Storage);
    const storage = await storeRepository.findOne({ where: { id: id } });
    if (!storage) {
      throw new AppError(404, "Not Found any storage with this id");
    }

    storage_quantity
      ? (storage.storage_quantity = storage_quantity)
      : storage.storage_quantity;

    return storeRepository.save(storage);
  };
}
