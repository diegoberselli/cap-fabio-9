import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { IOrderObjectUpdate } from "../../interfaces/order";

export default class UpdateOrderService {
  static async execute({ id, status }: IOrderObjectUpdate) {
    const orderRepository = AppDataSource.getRepository(Order);
    const order = await orderRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!order) {
      throw new AppError(404, "Order not found");
    }

    order.status = status || order.status;
    order.update_at = new Date();

    orderRepository.save(order);

    return order;
  }
}
