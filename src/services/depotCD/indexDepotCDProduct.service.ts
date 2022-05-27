import { AppDataSource } from "../../data-source";
import DepotCD from "../../entities/depotCD.entity";
import { AppError } from "../../errors/AppError";

interface depotProductId {
    id: string;
}

export default class IndexDepotCDProductService {
    
    static execute = async({id}: depotProductId) => {
        const depotCDRepository = AppDataSource.getRepository(DepotCD);
        
        const depotCDProduct = await depotCDRepository.findOne({where:{id: id}});
        if(!depotCDProduct){
            throw new AppError(404, 'Product not found');
        }

        return depotCDProduct;
    }
}