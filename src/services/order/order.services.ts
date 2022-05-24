/*import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { ProductOrder } from "../../entities/productOrder.entity";

const orderProductRepository = AppDataSource.getRepository(ProductOrder);
const orderRepository = AppDataSource.getRepository(Order);

export class OrderCreate {
  static async execute(id_order_product: string) {
    const productOrder = await orderProductRepository.find({
      where: {
        id: id_order_product,
      },
    });

    if (productOrder) {
      const amount = await productOrder.reduce(
        (acc, item) => acc + item.price_product,
        0
      );

      const newOrder = new Order();
      newOrder.amount = amount;

      orderRepository.save(newOrder);

      return newOrder;
    } else {
      throw new AppError(404, "Order Product not found");
    }
  }
}

export class OrderShowAll {
  static async execute() {
    const orders = orderRepository.find();

    return orders;
  }
}

export class OrderShow {
  static async execute(id_order_product: string) {
    const order = orderRepository.findOne({ where: { id: id_order_product } });

    if (!order) {
      throw new AppError(404, "Order Product not found");
    }

    return order;
  }
}

export class OrderUpdate {
  static async execute(id_order_product: string, amount: number) {
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

export class OrderDelete {
  static async execute(id_order_product: string) {
    const order = await orderRepository.findOne({
      where: {
        id: id_order_product,
      },
    });

    if (!order) {
      throw new AppError(404, "Order not found");
    }

    orderRepository.delete(order.id);

    return order;
  }
}*/
