import { AppDataSource } from "../../data-source";
import { IStore } from "../../interfaces/store";
import { Store } from "../../entities/store.entity";
import { AppError } from "../../errors/AppError";

export default class UpdateStoreService {
  static execute = async ({
    id,
    branch,
    city,
    street,
    district,
    number,
    zipcode,
    phone,
  }: IStore) => {
    const storeRepository = AppDataSource.getRepository(Store);
    const stores = await storeRepository.find();
    const store = stores.find((item) => item.id === id);

    if (!store) {
      throw new AppError(404, "Not Found any store with this id");
    }

    branch ? (store.branch = branch) : store.branch;
    city ? (store.city = city) : store.city;
    street ? (store.street = street) : store.street;
    district ? (store.district = district) : store.district;
    number ? (store.number = number) : store.number;
    zipcode ? (store.zipcode = zipcode) : store.zipcode;
    phone ? (store.phone = phone) : store.phone;
    store.update_at = new Date();

    return storeRepository.save(store);
  };
}
