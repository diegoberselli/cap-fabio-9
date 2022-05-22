import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

export default class ListProductsService {

    static execute =  async() => {
        
        const productsRepository = AppDataSource.getRepository(Product);
        const products = await productsRepository.find();

        return products;

    }

}