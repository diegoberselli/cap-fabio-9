"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const router = (0, express_1.Router)();
const productRouter = () => {
    router.post("/", product_controller_1.default.store);
    router.get("/", product_controller_1.default.list);
    router.get("/:id", product_controller_1.default.index);
    router.patch("/:id", product_controller_1.default.update);
    router.delete("/:id", product_controller_1.default.delete);
    return router;
};
exports.productRouter = productRouter;
