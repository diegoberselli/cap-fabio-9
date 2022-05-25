import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { IOrderObjectId } from "../../interfaces/order";

export default class ListOrderService {
  static async execute({ id }: IOrderObjectId) {
    const orderRepository = AppDataSource.getRepository(Order);
    const order = orderRepository.findOne({ where: { id: id } });

    if (!order) {
      throw new AppError(404, "Order Product not found");
    }

    return order;
  }
}
