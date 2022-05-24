import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

export default class UpdateOrderService {
  static async execute(id_order_product: string, amount: number) {
    const orderRepository = AppDataSource.getRepository(Order);
    const order = await orderRepository.findOne({
      where: {
        id: id_order_product,
      },
    });

    if (!order) {
      throw new AppError(404, "Order not found");
    }

    order.amount = amount || order.amount;
    order.update_at = new Date();

    orderRepository.save(order);

    return order;
  }
}
