import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { DeleteResult } from "typeorm";
import { Cd } from '../../entities/storageCdProducts.entity';

interface ICDProductId {
    id: string;
}

export default class DeleteCDProductService {

    static execute = async({id}: ICDProductId): Promise<DeleteResult>  => {

        const cdRepository = AppDataSource.getRepository(Cd);

        const cdProduct = await cdRepository.findOne({where:{id}});

        if(!cdProduct){
            throw new AppError(404, 'Not found any product with this id on CD');
        }

        return cdRepository.delete(id);

    }


}