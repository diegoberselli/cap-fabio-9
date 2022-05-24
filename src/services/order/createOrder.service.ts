import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { ProductOrder } from "../../entities/productOrder.entity";
import { IOrderCreate } from "../../interfaces/order";
import { Product } from "../../entities/product.entity";
import { In } from "typeorm";

export default class CreateOrderService {
  static async execute({ storeId, productArray }: IOrderCreate) {
    const orderRepository = AppDataSource.getRepository(Order);
    const productsRepository = AppDataSource.getRepository(Product);
    const productOrderRepository = AppDataSource.getRepository(ProductOrder);
    console.log(productArray, "productArray");

    const productIds: Array<string> = [];
    productArray.forEach((product) => {
      productIds.push(product.id);
    });

    const products = await productsRepository.findBy({ id: In(productIds) });

    if (!products[products.length - 1]) {
      throw new AppError(404, "Invalid list of ids");
    }

    //conferir se existe algum produto que seja cd, se pelo menos um existir,
    //o pedido vai receber order.status = "pending"
    //caso contrário pode receber o order.status="finished"

    //rota patch para atualizar que recebe o id do local que esta atualizando se for
    //o cd atualiza para in transit caso não seja o cd atualiza para finished

    const amount = productArray.reduce(
      (acc, item) => acc + item.price_product * item.quantity_product_order,
      0
    );

    const order = new Order();
    order.storeId = storeId;
    order.created_at = new Date();
    order.update_at = new Date();
    order.amount = amount;
    order.status = "pending";

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