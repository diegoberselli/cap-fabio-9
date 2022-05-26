import { AppDataSource } from "../../data-source";
import DepotCD from "../../entities/depotCD.entity";
import { Product } from "../../entities/product.entity";
import { Cd } from "../../entities/storageCdProducts.entity";
import { AppError } from "../../errors/AppError";
import {IProductCDUpdate, IProductDepotCD} from '../../interfaces/depotCD/index'
import { IProductCd } from "../../interfaces/storageCD";




export default class UpdateDepotCdProductService {
    static execute = async({id, product_id, cd_id, quantity}: IProductCDUpdate) => {
        const productRepository = AppDataSource.getRepository(Product);
        const cdRepository = AppDataSource.getRepository(Cd);
        const depotCDRepository = AppDataSource.getRepository(DepotCD);

        const depotProduct: any = await depotCDRepository.findOne({where:{id:id}});
        console.log(depotProduct)
        const product = await productRepository.findOne({where:{id: product_id}});
        const cd = await cdRepository.findOne({where:{id: cd_id}});


        product_id ? (depotProduct.product = product) : depotProduct.product;
        quantity ? (depotProduct.quantity = quantity) : depotProduct.quantity;
        cd_id ? (depotProduct.cd = cd) : depotProduct.cd;

        await depotCDRepository.save(depotProduct);

        return depotProduct;
    }
}