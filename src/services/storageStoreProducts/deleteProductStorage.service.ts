import { DeleteResult } from "typeorm";
import { AppDataSource } from "../../data-source";
import { ProductRegistrationStorage } from "../../entities/productRegistrationStorage.entity";
import { AppError } from "../../errors/AppError";

export default class DeleteProductStorageService {
  static async execute(id_product_storage: string): Promise<DeleteResult> {
    const productRegistrationRepository = AppDataSource.getRepository(
      ProductRegistrationStorage
    );

    const allProductRegistration = await productRegistrationRepository.find();

    const productRegistration = allProductRegistration.find(
      (item) => item.id === id_product_storage
    );

    if (!productRegistration) {
      throw new AppError(400, "Invalid identifier");
    }

    await productRegistrationRepository.delete(productRegistration!.id);

    return <any>productRegistration;
  }
}
