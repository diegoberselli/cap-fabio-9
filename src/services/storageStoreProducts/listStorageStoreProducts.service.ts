import { AppDataSource } from "../../data-source";
import { Storage } from "../../entities/storageStoreProducts";

export default class listStoreService {
    static execute = async () => {
      const storageRepository = AppDataSource.getRepository(Storage);
      const stores = await storageRepository.find();
      return stores;
    };
  }