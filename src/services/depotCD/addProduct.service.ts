import { AppDataSource } from "../../data-source";
import DepotCD from "../../entities/depotCD.entity";
import { Product } from "../../entities/product.entity";
import { Cd } from "../../entities/storageCdProducts.entity";
import { AppError } from "../../errors/AppError";
import {IProductDepotCDCreate} from "../../interfaces/depotCD";


export default class AddProductService {
    static execute = async({product_id, cd_id, quantity}: IProductDepotCDCreate) => {
        const productRepository = AppDataSource.getRepository(Product);
        const cdRepository = AppDataSource.getRepository(Cd);
        const depotCDRepository = AppDataSource.getRepository(DepotCD);

        const product =  await productRepository.findOne({where:{id: product_id}});
        if(!product){
            throw new AppError(404, 'Product not found');
        }

        const cd = await cdRepository.findOne({where:{id: cd_id}});
        if(!cd){
            throw new AppError(404, 'Distribution Center not found');
        }

        // const depotAlreadyExists = 

        const depotCDProduct = new DepotCD();
        depotCDProduct.product = product;
        depotCDProduct.quantity = quantity;
        depotCDProduct.cd = cd;

        depotCDRepository.create(depotCDProduct);
        await depotCDRepository.save(depotCDProduct);

        return depotCDProduct;
    }
}