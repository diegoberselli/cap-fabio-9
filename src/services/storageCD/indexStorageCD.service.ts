import { AppDataSource } from "../../data-source";
import { Cd } from '../../entities/storageCdProducts.entity';

interface ICDProductId {
    id: string;
}

export default class IndexCDProductService {

    static execute = async ({id}: ICDProductId) => {
        
        const cdRepository = AppDataSource.getRepository(Cd);
        const cdProduct = await cdRepository.findOne({where:{id}})

        return cdProduct;
    }

}