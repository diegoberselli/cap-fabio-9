import { Store } from "../../entities/store.entity";
import { Storage } from "../../entities/storageStoreProducts.entity";
import { AppDataSource } from "../../data-source";
import { ProductRegistrationStorage } from "../../entities/productRegistrationStorage.entity";

export default class UpdateStorageStoreService {
  static async execute(
    id_product_storage: string,
    quantity: number,
    price: number,
    branchLoggedIn: string
  ) {
    const storeRepository = AppDataSource.getRepository(Store);
    const storageRepository = AppDataSource.getRepository(Storage);
    const productRegistrationRepository = AppDataSource.getRepository(
      ProductRegistrationStorage
    );

    const store = await storeRepository.findOne({
      where: { branch: branchLoggedIn },
    });
    const storage = await storageRepository.findOne({
      where: { id: store?.storage.id },
    });

    const productRegistration = await productRegistrationRepository.findOne({
      where: { id: id_product_storage },
    });

    productRegistration!.price = price;
    productRegistration!.quantity = quantity;
    productRegistration!.updated_at = new Date();

    await productRegistrationRepository.save(<any>productRegistration);

    return productRegistration;
  }
}
