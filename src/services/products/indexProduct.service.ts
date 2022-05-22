import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

interface IProductId {
    id: string;
}

export default class IndexProductService {

    static execute = async ({id}: IProductId) => {
        
        const productRepository = AppDataSource.getRepository(Product);
        const product = await productRepository.findOne({where:{id}})

    }

}