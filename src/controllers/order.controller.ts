import { Request, Response } from "express";

import CreateOrderService from "../services/order/createOrder.service";
import DeleteOrderService from "../services/order/deleteOrder.service";
import ListOrderService from "../services/order/listOrder.service";
import ListAllOrderService from "../services/order/listAllOrder.service";
import ListOrderStatusService from "../services/order/listOrderStatus.service";
import UpdateOrderService from "../services/order/updateOrder.service";

export default class OrderController {
  static async create(req: Request, res: Response) {
    const { storeId, productArray, status } = req.body;

    const order = await CreateOrderService.execute({
      storeId,
      productArray,
      status,
    });

    return res.status(201).json(order);
  }

  static async showAll(req: Request, res: Response) {
    const orders = await ListAllOrderService.execute();

    return res.status(200).json(orders);
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const order = await ListOrderService.execute({ id });

    return res.status(200).json(order);
  }

  static async showStatus(req: Request, res: Response) {
    const { status } = req.params;

    const orders = await ListOrderStatusService.execute({ status });

    return res.status(200).json(orders);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;

    const order = await UpdateOrderService.execute({ id, status });

    return res
      .status(200)
      .json({ message: "Order status updated successfully", order: order });
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const order = await DeleteOrderService.execute({ id });

    return res.status(204).json();
  }
}
