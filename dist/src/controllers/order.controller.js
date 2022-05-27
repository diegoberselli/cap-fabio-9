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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createOrder_service_1 = __importDefault(require("../services/order/createOrder.service"));
const deleteOrder_service_1 = __importDefault(require("../services/order/deleteOrder.service"));
const listOrder_service_1 = __importDefault(require("../services/order/listOrder.service"));
const listAllOrder_service_1 = __importDefault(require("../services/order/listAllOrder.service"));
const listOrderStatus_service_1 = __importDefault(require("../services/order/listOrderStatus.service"));
const updateOrder_service_1 = __importDefault(require("../services/order/updateOrder.service"));
class OrderController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { storeId, productArray, status } = req.body;
            const order = yield createOrder_service_1.default.execute({
                storeId,
                productArray,
                status,
            });
            return res.status(201).json(order);
        });
    }
    static showAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield listAllOrder_service_1.default.execute();
            return res.status(200).json(orders);
        });
    }
    static show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const order = yield listOrder_service_1.default.execute({ id });
            return res.status(200).json(order);
        });
    }
    static showStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = req.params;
            const orders = yield listOrderStatus_service_1.default.execute({ status });
            return res.status(200).json(orders);
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { status } = req.body;
            const order = yield updateOrder_service_1.default.execute({ id, status });
            return res
                .status(200)
                .json({ message: "Order status updated successfully", order: order });
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const order = yield deleteOrder_service_1.default.execute({ id });
            return res.status(204).json();
        });
    }
}
exports.default = OrderController;
