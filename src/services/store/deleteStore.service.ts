import { AppDataSource } from "../../data-source";
import { IStoreId } from "../../interfaces/store";
import { Store } from "../../entities/store.entity";

export default class deleteStoreService {
  static execute = async ({ id }: IStoreId) => {
    const storeRepository = AppDataSource.getRepository(Store);

    const store = await storeRepository.findOne({ where: { id } });

    const deletedUser = await storeRepository.delete(store!.id);

    return deletedUser;
  };
}
