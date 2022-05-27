import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/AppError";
import { IProductCreate } from "../../interfaces/products";

export default class CreateProductService {
  static execute = async ({
    name,
    description,
    price,
    category,
    img_URL,
  }: IProductCreate) => {
    const productRepository = AppDataSource.getRepository(Product);

    const productAlreadyExists = await productRepository.findOne({
      where: { name },
    });

    if (productAlreadyExists) {
      throw new AppError(409, "Product already Exists");
    }

    const product = new Product();
    product.name = name;
    product.price = price;
    product.description = description;
    product.category = category;
    product.img_URL = img_URL;
    product.created_at = new Date();
    product.update_at = new Date();

    productRepository.create(product);
    await productRepository.save(product);

    return product;
  };
}
