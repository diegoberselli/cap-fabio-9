import { IStoreCreate } from "../../interfaces/store";
import { AppDataSource } from "../../data-source";
import { Store } from "../../entities/store.entity";
import { Storage } from "../../entities/storageStoreProducts.entity";
import { AppError } from "../../errors/AppError";
import bcrypt from "bcryptjs";

export default class CreateStoreService {
  static execute = async ({
    branch,
    city,
    street,
    district,
    number,
    zipcode,
    phone,
    password,
    state,
  }: IStoreCreate) => {
    const storeRepository = AppDataSource.getRepository(Store);
    const storeAlreadyExists = await storeRepository.findOne({
      where: { branch },
    });
    if (storeAlreadyExists) {
      throw new AppError(
        409,
        "This branch of store already exists in your database"
      );
    }

    const storageRepository = AppDataSource.getRepository(Storage);

    const storage = new Storage();

    await storageRepository.save(storage);

    const store = new Store();
    store.branch = branch;
    store.city = city;
    store.street = street;
    store.district = district;
    store.state = state;
    store.number = number;
    store.zipcode = zipcode;
    store.phone = phone;
    store.password = bcrypt.hashSync(password, 8);
    store.created_at = new Date();
    store.update_at = new Date();
    store.storage = storage;

    await storeRepository.save(store);

    return store;
  };
}
