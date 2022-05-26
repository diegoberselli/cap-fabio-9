import { IStoreCreate } from "../../interfaces/store";
import { AppDataSource } from "../../data-source";
import { Store } from "../../entities/store.entity";
import { Storage } from "../../entities/storageStoreProducts";
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
    storage.amount = 0;
    storage.storage_quantity = 0;

    await storageRepository.save(storage);

    const store = new Store();
    store.branch = branch;
    store.city = city;
    store.street = street;
    store.district = district;
    store.number = number;
    store.zipcode = zipcode;
    store.phone = phone;
    store.password = bcrypt.hashSync(password, 8);
    store.storage = storage;

    await storeRepository.save(store);

    return store;
  };
}
