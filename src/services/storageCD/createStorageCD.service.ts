import { AppDataSource } from "../../data-source";
import { Cd } from "../../entities/storageCdProducts.entity";
import { AppError } from "../../errors/AppError";
import { IProductCdCreate } from "../../interfaces/storageCD";


export default class CreateProductCDService {

    static execute = async({product_id, cd_quantity}:IProductCdCreate) => {
        const cdRepository = AppDataSource.getRepository(Cd);
        
        const productAlreadyExists = await cdRepository.findOne({where:{product_id}});

        if(productAlreadyExists){
            throw new AppError(409, 'This product already exists in CD, please change the amount of them');
        }

        const cdProduct = new Cd();
        cdProduct.product_id = product_id;
        cdProduct.cd_quantity = cd_quantity;

        cdRepository.create(cdProduct);
        await cdRepository.save(cdProduct);

        return cdProduct;
    }
}

