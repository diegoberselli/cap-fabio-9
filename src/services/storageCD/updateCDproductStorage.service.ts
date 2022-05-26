import { AppDataSource } from "../../data-source";
import { Cd } from "../../entities/storageCdProducts.entity";
import { AppError } from "../../errors/AppError";
import { IProductCd } from "../../interfaces/storageCD";

export default class UpdateCDProductService {
  static execute = async ({ id, cd_quantity, product_id }: IProductCd) => {
    const cdRepository = AppDataSource.getRepository(Cd);
    const cdProduct = await cdRepository.findOne({ where: { id: id } });

    if (!cdProduct) {
      throw new AppError(404, "Not found any product with this Id");
    }

    cd_quantity ? (cdProduct.cd_quantity = cd_quantity) : cdProduct.cd_quantity;
    product_id ? (cdProduct.product_id = product_id) : cdProduct.product_id;

    await cdRepository.save(cdProduct);

    return cdProduct;
  };
}
