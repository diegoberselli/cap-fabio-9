import { AppDataSource } from "../../data-source";
import { IStorageStoreProductId } from "./../../interfaces/storageStoreProducts/index";
import { Storage } from "../../entities/storageStoreProducts";
import { AppError } from "../../errors/AppError";

export default class IndexStorageStoreProductService {
  static execute = async ({ id }: IStorageStoreProductId) => {
    const storageRepository = AppDataSource.getRepository(Storage);
    const store = await storageRepository.findOne({ where: { id } });
    if (!store) {
      throw new AppError(404, "Storage not found");
    }
    return store;
  };
}
