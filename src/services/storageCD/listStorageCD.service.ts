import { AppDataSource } from "../../data-source";
import { Cd } from "../../entities/storageCdProducts.entity";

export default class ListCDProductsService {

    static execute =  async() => {
        
        const cdRepository = AppDataSource.getRepository(Cd);
        const cdProducts = await cdRepository.find();

        return cdProducts;

    }

}