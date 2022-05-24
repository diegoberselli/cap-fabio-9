import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

export default class ListOrderService {
  static async execute(id_order_product: string) {
    const orderRepository = AppDataSource.getRepository(Order);
    const order = orderRepository.findOne({ where: { id: id_order_product } });

    if (!order) {
      throw new AppError(404, "Order Product not found");
    }

    return order;
  }
}
