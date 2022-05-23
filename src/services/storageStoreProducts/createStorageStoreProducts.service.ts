import { IStorageStoreProduct } from "./../../interfaces/storageStoreProducts/index";
import { AppDataSource } from "../../data-source";
import { Storage } from "../../entities/storageStoreProducts";

export default class CreateStorageStoreProductService {
  static execute = async ({ storage_quantity }: IStorageStoreProduct) => {
    const storageRepository = AppDataSource.getRepository(Storage);

    const storage = new Storage();
    storage.storage_quantity = storage_quantity;
    storageRepository.create(storage);
    await storageRepository.save(storage);

    return storage;
  };
}
