import { AppDataSource } from "../../data-source";
import DepotCD from "../../entities/depotCD.entity";

export default class ListDepotCDService {
    static execute = async() => {
        const depotCDRepository = AppDataSource.getRepository(DepotCD);
        const depotCDProducts = await depotCDRepository.find();

        return depotCDProducts;
    }
}