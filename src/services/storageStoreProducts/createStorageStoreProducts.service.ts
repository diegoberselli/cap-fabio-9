import { IStorageStoreProduct } from "./../../interfaces/storageStoreProducts/index";
import { AppDataSource } from "../../data-source";
import { Storage } from "../../entities/storageStoreProducts.entity";

export default class CreateStorageStoreProductService {
  static execute = async ({ storage_quantity }: IStorageStoreProduct) => {
    const storageRepository = AppDataSource.getRepository(Storage);

    const storage = new Storage();
    storageRepository.create(storage);
    await storageRepository.save(storage);

    return storage;
  };
}
