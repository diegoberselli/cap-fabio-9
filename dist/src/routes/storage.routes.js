"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageRouter = void 0;
const express_1 = require("express");
const storageStoreProducts_controller_1 = __importDefault(require("../controllers/storageStoreProducts.controller"));
const authToken_1 = __importDefault(require("../middlewares/authToken"));
const router = (0, express_1.Router)();
const storageRouter = () => {
    router.post("", storageStoreProducts_controller_1.default.store);
    router.delete("/delete/:id_product_storage", authToken_1.default, storageStoreProducts_controller_1.default.delete);
    router.post("/add", authToken_1.default, storageStoreProducts_controller_1.default.addProducts);
    router.patch("/update", authToken_1.default, storageStoreProducts_controller_1.default.update);
    return router;
};
exports.storageRouter = storageRouter;
