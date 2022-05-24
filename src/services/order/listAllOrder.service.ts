import { Order } from "../../entities/order.entity";
import { AppDataSource } from "../../data-source";

export default class ListAllOrderService {
  static async execute() {
    const orderRepository = AppDataSource.getRepository(Order);
    const orders = orderRepository.find();

    return orders;
  }
}
