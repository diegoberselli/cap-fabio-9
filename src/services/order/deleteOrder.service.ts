import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { IOrderObjectId } from "../../interfaces/order";

export default class DeleteOrderService {
  static async execute({ id }: IOrderObjectId) {
    const orderRepository = AppDataSource.getRepository(Order);
    const order = await orderRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!order) {
      throw new AppError(404, "Order not found");
    }

    orderRepository.delete(order.id);

    return order;
  }
}
