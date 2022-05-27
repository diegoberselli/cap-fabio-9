import { Order } from "../../entities/order.entity";
import { AppDataSource } from "../../data-source";
import { IOrderObjectStatus } from "../../interfaces/order";

export default class ListOrderStatusService {
  static async execute({ status }: IOrderObjectStatus) {
    const orderRepository = AppDataSource.getRepository(Order);
    const orders = orderRepository.find({ where: { status: status } });
    return orders;
  }
}
