import {
  OrderCreate,
  OrderDelete,
  OrderShowAll,
  OrderUpdate,
  OrderShow,
} from "../../services/order/order.services";
import { Request, Response } from "express";

export default class OrderController {
  static async create(req: Request, res: Response) {
    const { storeId, productIds } = req.body;

    const order = await OrderCreate.execute({ storeId, productIds });

    return res.status(201).json(order);
  }

  static async showAll(req: Request, res: Response) {
    const orders = await OrderShowAll.execute();

    return res.status(200).json(orders);
  }

  static async show(req: Request, res: Response) {
    const { id_order_product } = req.body;

    const order = await OrderShow.execute(id_order_product);

    return res.status(200).json(order);
  }

  static async update(req: Request, res: Response) {
    const { id_order_product } = req.params;
    const { amount } = req.body;

    const order = await OrderUpdate.execute(id_order_product, amount);

    return res
      .status(200)
      .json({ message: "Order updated successfully", order: order });
  }

  static async delete(req: Request, res: Response) {
    const { id_order_product } = req.body;
    const order = await OrderDelete.execute(id_order_product);

    return res
      .status(200)
      .json({ message: "Order deleted successfully", order: order });
  }
}
