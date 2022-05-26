import { Request, Response } from "express";

import CreateOrderService from "../services/order/createOrder.service";
import DeleteOrderService from "../services/order/deleteOrder.service";
import ListOrderService from "../services/order/listOrder.service";
import ListAllOrderService from "../services/order/listAllOrder.service";

export default class OrderController {
  static async create(req: Request, res: Response) {
    const { storeId, productArray } = req.body;
    console.log(productArray);

    const order = await CreateOrderService.execute({ storeId, productArray });

    return res.status(201).json(order);
  }

  static async showAll(req: Request, res: Response) {
    const orders = await ListAllOrderService.execute();

    return res.status(200).json(orders);
  }

  static async show(req: Request, res: Response) {
    const { id_order_product } = req.body;

    const order = await ListOrderService.execute(id_order_product);

    return res.status(200).json(order);
  }

  static async delete(req: Request, res: Response) {
    const { id_order_product } = req.body;
    const order = await DeleteOrderService.execute(id_order_product);

    return res.status(204).json();
  }
}
