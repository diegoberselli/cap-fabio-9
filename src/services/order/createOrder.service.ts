import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { ProductOrder } from "../../entities/productOrder.entity";
import { IOrderCreate } from "../../interfaces/order";
import { Product } from "../../entities/product.entity";
import { In } from "typeorm";
import DepotCD from "../../entities/depotCD.entity";
import { Storage } from "../../entities/storageStoreProducts";
import { ProductRegistrationStorage } from "../../entities/productRegistrationStorage";

export default class CreateOrderService {
  static async execute({ storeId, productArray, status }: IOrderCreate) {
    const orderRepository = AppDataSource.getRepository(Order);

    const productsRepository = AppDataSource.getRepository(Product);
    const productOrderRepository = AppDataSource.getRepository(ProductOrder);
    const depotCDRepository = AppDataSource.getRepository(DepotCD);
    const storageRepository = AppDataSource.getRepository(Storage);
    const storageRegistrationRepository = AppDataSource.getRepository(
      ProductRegistrationStorage
    );

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

        const depotCDOfDirectedFrom = await depotCDRepository.findOne({
          where: { id: product.directed_from_id },
        });
        if (depotCDOfDirectedFrom) {
          depotCDOfDirectedFrom.quantity =
            depotCDOfDirectedFrom.quantity - product.quantity_product_order;

          await depotCDRepository.save(depotCDOfDirectedFrom);
        } else {
          const storageOfDirectedFrom = await storageRepository.findOne({
            where: { id: product.directed_from_id },
          });
          if (storageOfDirectedFrom) {
            storageOfDirectedFrom.products.forEach(async (productStore) => {
              if (productStore.product.id === product.id) {
                const storageRegistration =
                  await storageRegistrationRepository.findOne({
                    where: { id: productStore.id },
                  });
                if (storageRegistration) {
                  storageRegistration.quantity =
                    storageRegistration.quantity -
                    product.quantity_product_order;
                  await storageRegistrationRepository.save(storageRegistration);
                }
              }
            });
            await storageRepository.save(storageOfDirectedFrom);
          }
        }

        await productOrderRepository.save(orderProduct);
      }
    });

    return order;
  }
}
