"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_entity_1 = require("../../entities/order.entity");
const AppError_1 = require("../../errors/AppError");
const data_source_1 = require("../../data-source");
class ListOrderService {
    static execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderRepository = data_source_1.AppDataSource.getRepository(order_entity_1.Order);
            const order = orderRepository.findOne({ where: { id: id } });
            if (!order) {
                throw new AppError_1.AppError(404, "Order not found");
            }
            return order;
        });
    }
}
exports.default = ListOrderService;
