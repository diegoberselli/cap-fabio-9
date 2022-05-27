import { Store } from "../../entities/store.entity";
import { Storage } from "../../entities/storageStoreProducts.entity";
import { AppDataSource } from "../../data-source";
import { ProductRegistrationStorage } from "../../entities/productRegistrationStorage.entity";
import { AppError } from "../../errors/AppError";

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

    ////////////////////////////////////////////
    // let amountDataBase =
    //   productRegistration!.quantity * productRegistration!.price;
    // storage!.amount = storage!.amount - amountDataBase;

    // await storageRepository.save(<any>storage);
    // await productRegistrationRepository.save(<any>productRegistration);

    // let newAmountDataBase = quantity * price;
    // storage!.amount = storage!.amount + newAmountDataBase;

    // await storageRepository.save(<any>storage);
    // await productRegistrationRepository.save(<any>productRegistration);

    ////////////////////////////////////////////

    productRegistration!.price = price;
    productRegistration!.quantity = quantity;
    productRegistration!.updated_at = new Date();

    await productRegistrationRepository.save(<any>productRegistration);

    return productRegistration;
  }
}

// const store = await storeRepository.findOne({
// where: { branch: branchLoggedIn },
// });
//
// const storage = await storageRepository.findOne({
// where: { id: store?.storage.id },
// });

// Uma loja não fazer alterações no estoque de outra loja

// store ( coluna storageId ) 1:1 storage
// storage 1:N productRegistration ( coluna storageId )

// console.log("baaaaaaaaaaaaa");
// console.log(productRegistration?.storage.id);
// console.log("separaaaa");
// console.log(store?.storage.id);

// if (storage?.id !== store?.storage.id) {
//   throw new AppError(400, "Você está logado em outra loja");
// }
