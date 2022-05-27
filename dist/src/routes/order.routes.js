"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
const createOrder_validation_1 = __importDefault(require("../validators/order/createOrder.validation"));
const express_yup_middleware_1 = require("express-yup-middleware");
const router = (0, express_1.Router)();
const orderRouter = () => {
    router.post("", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: createOrder_validation_1.default }), order_controller_1.default.create);
    router.get("", order_controller_1.default.showAll);
    console.log("routes");
    router.get("", order_controller_1.default.show);
    router.delete("/delete", order_controller_1.default.delete);
    router.get("/status/:status", order_controller_1.default.showStatus);
    router.patch("/:id", order_controller_1.default.update);
    router.delete("/:id", order_controller_1.default.delete);
    return router;
};
exports.orderRouter = orderRouter;
