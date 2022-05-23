import { IStorageStoreProductId } from "./../../interfaces/storageStoreProducts/index";
import { AppDataSource } from "../../data-source";
import { Storage } from "../../entities/storageStoreProducts";

export default class deleteStorageStoreProductService {
  static execute = async ({ id }: IStorageStoreProductId) => {
    const storeRepository = AppDataSource.getRepository(Storage);

    const storage = await storeRepository.findOne({ where: { id } });

    const deletedStorage = await storeRepository.delete(storage!.id);

    return deletedStorage;
  };
}
