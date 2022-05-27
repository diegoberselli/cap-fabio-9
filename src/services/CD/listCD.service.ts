import { AppDataSource } from "../../data-source";
import { Cd } from "../../entities/Cd.entity";

export default class ListCDService {

    static execute =  async() => {
        
        const cdRepository = AppDataSource.getRepository(Cd);
        const cd = await cdRepository.find();

        return cd;

    }

}