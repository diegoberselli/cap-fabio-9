import { IStoreCreate } from "../../interfaces/store";
import { AppDataSource } from "../../data-source";
import { Store } from "../../entities/store.entity";
import { AppError } from "../../errors/AppError";

export default class CreateStoreService {
  static execute = async ({
    branch,
    city,
    street,
    district,
    number,
    zipcode,
    phone,
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

    const store = new Store();
    store.branch = branch;
    store.city = city;
    store.street = street;
    store.district = district;
    store.number = number;
    store.zipcode = zipcode;
    store.phone = phone;

    storeRepository.create(store);
    await storeRepository.save(store);

    return store;
  };
}
