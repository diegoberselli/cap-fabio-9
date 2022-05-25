import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { ProductOrder } from "../../entities/productOrder.entity";
import { IOrderCreate } from "../../interfaces/order";
import { Product } from "../../entities/product.entity";
import { In } from "typeorm";
import { Store } from "../../entities/store.entity";

export default class CreateOrderService {
  static async execute({ storeId, productArray, status }: IOrderCreate) {
    const orderRepository = AppDataSource.getRepository(Order);
    const productsRepository = AppDataSource.getRepository(Product);
    const productOrderRepository = AppDataSource.getRepository(ProductOrder);

    const productIds: Array<string> = [];
    productArray.forEach((product) => {
      productIds.push(product.id);
    });

    const products = await productsRepository.findBy({ id: In(productIds) });

    if (!products[products.length - 1]) {
      throw new AppError(404, "Invalid list of ids");
    }

    const amount = productArray.reduce(
      (acc, item) => acc + item.price_product * item.quantity_product_order,
      0
    );

    const order = new Order();
    order.storeId = storeId;
    order.created_at = new Date();
    order.update_at = new Date();
    order.amount = amount;
    order.status = status;

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

    // let categoryRepository = await this.connection.getRepository<Category>(Category);
    // let category = await categoryRepository.findOneById(req.body.category);
    // let product = new Product();
    // product.category = category;
    // product.storageUrl = req.body.storageUrl;

    // let result = await this.repository.persist(product);
    // // -----------------
    // const store = await storeRepository.findOne({
    //   where: { id: order.storeId },
    // });

    // if (store) {
    //   //store.orders = [order];
    //   order.store = store;
    //   await orderRepository.save(order);
    // }

    return order;
  }
}
