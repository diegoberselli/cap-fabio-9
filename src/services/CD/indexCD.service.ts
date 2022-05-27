import { AppDataSource } from "../../data-source";
import { Cd } from '../../entities/Cd.entity';

interface ICDProductId {
    id: string;
}

export default class IndexCDService {

    static execute = async ({id}: ICDProductId) => {
        
        const cdRepository = AppDataSource.getRepository(Cd);
        const cd = await cdRepository.findOne({where:{id}})

        return cd;
    }

}