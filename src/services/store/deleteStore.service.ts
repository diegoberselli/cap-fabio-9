import { AppDataSource } from "../../data-source";
import { IStoreId } from "../../interfaces/store";
import { Store } from "../../entities/store.entity";
import { AppError } from "../../errors/AppError";

export default class deleteStoreService {
  static execute = async ({ id }: IStoreId) => {
    const storeRepository = AppDataSource.getRepository(Store);

    const allStores = await storeRepository.find();
    const store = allStores.find((item) => item.id === id);

    if (!store) {
      throw new AppError(404, "Store not found");
    }

    await storeRepository.delete(store.id);

    return;
  };
}
