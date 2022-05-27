import { IProductRegistrationArray } from "../../interfaces/storageStoreProducts";
import { Product } from "../../entities/product.entity";
import { Storage } from "../../entities/storageStoreProducts.entity";
import { ProductRegistrationStorage } from "../../entities/productRegistrationStorage.entity";
import { Store } from "../../entities/store.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";

export default class AddProductsStorageStoreService {
  static async execute(
    { products }: IProductRegistrationArray,
    branchLoggedIn: string
  ) {
    const storeRepository = AppDataSource.getRepository(Store);
    const productsRepository = AppDataSource.getRepository(Product);
    const storageRepository = AppDataSource.getRepository(Storage);
    const productRegistrationRepository = AppDataSource.getRepository(
      ProductRegistrationStorage
    );

    const productIds: string[] = [];
    products.forEach((item) => productIds.push(item.id));

    const store = await storeRepository.findOne({
      where: { branch: branchLoggedIn },
    });

    const allProducts = await productsRepository.find();

    for (let i = 0; i < productIds.length; i++) {
      let productIdMatch = false;
      for (let j = 0; j < allProducts.length; j++) {
        if (productIds[i] === allProducts[j].id) {
          productIdMatch = true;
        }
      }
      if (!productIdMatch) {
        throw new AppError(400, "Incorrect product identifier");
      }
    }

    const storage = await storageRepository.findOne({
      where: { id: store?.storage.id },
    });

    if (storage?.products != null) {
      for (let i = 0; i < productIds.length; i++) {
        for (let j = 0; j < storage?.products.length; j++) {
          if (productIds[i] === storage?.products[j].product.id) {
            throw new AppError(400, "Some products are already stored");
          }
        }
      }
    }

    let returnProducts: any = [];

    products.forEach(async (item) => {
      const productRegistration = new ProductRegistrationStorage();
      productRegistration.storage = <any>storage;
      productRegistration.product = <any>item;
      productRegistration.quantity = item.quantity || 0;
      productRegistration.price = item.price || 0;

      returnProducts.push(productRegistration.product);

      await productRegistrationRepository.save(productRegistration);
    });

    // storage!.storage_quantity = productIds.length + storage!.storage_quantity;

    // const amount = products.reduce(
    //   (acc, item) => acc + item.price * item.quantity,
    //   0
    // );
    // storage!.amount = parseFloat((amount + storage!.amount).toFixed(2));

    await storageRepository.save(<any>storage);

    return returnProducts;
  }
}
