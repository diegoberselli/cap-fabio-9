import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { ProductOrder } from "../../entities/productOrder.entity";
import { IOrderCreate, IOrderObjectId } from "../../interfaces/order";
import { Product } from "../../entities/product.entity";
import { In } from "typeorm";

const orderRepository = AppDataSource.getRepository(Order);

export class OrderCreate {
  static async execute({ storeId, productArray }: IOrderCreate) {
    const orderRepository = AppDataSource.getRepository(Order);
    const productsRepository = AppDataSource.getRepository(Product);
    const productOrderRepository = AppDataSource.getRepository(ProductOrder);
    console.log(productArray, "productArray");

    const productIds: Array<string> = [];
    productArray.forEach((product) => {
      productIds.push(product.id);
    });

    //tratamento de erro caso o json não seja o esperado no foreach

    const products = await productsRepository.findBy({ id: In(productIds) });

    if (!products[products.length - 1]) {
      throw new AppError(404, "Invalid list of ids");
    }

    const order = new Order();
    order.storeId = storeId;
    order.created_at = new Date();
    order.update_at = new Date();
    order.amount = 1;
    order.status = "a";
    //percorrer a lista de productIds , procurando correspondencia no product repository
    //fazer um reduce
    //adicionar no amount do pedido

    orderRepository.create(order);
    await orderRepository.save(order);

    productArray.forEach(async (product) => {
      if (product) {
        const orderProduct = productOrderRepository.create({
          order: order,
          product: product,
          price_product: product.price_product,
          quantity_product_order: product.quantity_product_order,
          directed_from_id: product.directed_from_id,
        });
        await productOrderRepository.save(orderProduct);
      }
    });

    return order;
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
}
function IOrderObjectId(id: any, IOrderObjectId: any) {
  throw new Error("Function not implemented.");
}
