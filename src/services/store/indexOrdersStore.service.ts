import { AppDataSource } from "../../data-source";
import { IStoreId } from "../../interfaces/store";
import { Order } from "../../entities/order.entity";

export default class IndexOrdersStoreService {
  static execute = async ({ id }: IStoreId) => {
    const ordersRepository = AppDataSource.getRepository(Order);

    const orders = await ordersRepository.find({
      where: { storeId: id },
    });

    return orders;
  };
}
