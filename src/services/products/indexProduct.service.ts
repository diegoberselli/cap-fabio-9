import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/AppError";

interface IProductId {
  id: string;
}

export default class IndexProductService {
  static execute = async ({ id }: IProductId) => {
    const productRepository = AppDataSource.getRepository(Product);
    const products = await productRepository.find();
    const product = products.find((item) => item.id === id);

    if (!product) {
      throw new AppError(404, "Product not found");
    }

    return product;
  };
}
