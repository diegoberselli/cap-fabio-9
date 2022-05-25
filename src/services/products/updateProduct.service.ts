import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/AppError";
import { IProduct } from "../../interfaces/products";

export default class UpdateProductService {
  static execute = async ({
    description,
    category,
    id,
    name,
    price,
    img_URL,
  }: IProduct) => {
    const productRepository = AppDataSource.getRepository(Product);

    const product = await productRepository.findOne({ where: { id: id } });

    if (!product) {
      throw new AppError(404, "Not found any product with this id");
    }

    price ? (product.price = price) : product.price;
    name ? (product.name = name) : product.name;
    description ? (product.description = description) : product.description;
    category ? (product.category = category) : product.category;
    img_URL ? (product.img_URL = img_URL) : product.img_URL;
    product.update_at = new Date();

    await productRepository.save(product);

    return product;
  };
}
