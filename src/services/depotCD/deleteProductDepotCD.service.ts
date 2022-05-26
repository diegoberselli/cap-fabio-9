import { string } from "yup";
import { AppDataSource } from "../../data-source";
import DepotCD from "../../entities/depotCD.entity";
import { AppError } from "../../errors/AppError";
import { DeleteResult } from 'typeorm'

interface IDCDProduct {
    id: string;
}

export default class DeleteDepotCDProductService {
    static execute = async({id}:IDCDProduct): Promise<DeleteResult> => {
        console.log('chegou aqui')
        const depotCDRepository = AppDataSource.getRepository(DepotCD);
       
        const depotLine = await depotCDRepository.findOne({where:{id: id}}); 

        return depotCDRepository.delete(id);
    }
}