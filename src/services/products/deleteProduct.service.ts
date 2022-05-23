import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { DeleteResult } from "typeorm";
import { Product } from "../../entities/product.entity";

interface IProductId {
    id: string;
}

export default class DeleteProductService {

    static execute = async({id}: IProductId): Promise<DeleteResult>  => {

        const productRepository = AppDataSource.getRepository(Product);

        const product = await productRepository.findOne({where:{id}});

        if(!product){
            throw new AppError(404, 'Not found any product with this id');
        }

        return productRepository.delete(id);

    }


}