import { AppDataSource } from "../../data-source";
import { Store } from "../../entities/store.entity";

export default class listStoreService {
  static execute = async () => {
    const storeRepository = AppDataSource.getRepository(Store);
    const stores = await storeRepository.find();
    return stores;
  };
}
