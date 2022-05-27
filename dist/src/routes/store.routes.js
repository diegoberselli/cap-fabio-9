"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRouter = void 0;
const express_1 = require("express");
const store_controller_1 = __importDefault(require("../controllers/store.controller"));
const authToken_1 = __importDefault(require("../middlewares/authToken"));
const express_yup_middleware_1 = require("express-yup-middleware");
const createStore_validation_1 = __importDefault(require("../validators/store/createStore.validation"));
const router = (0, express_1.Router)();
const storeRouter = () => {
    router.post("", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: createStore_validation_1.default }), store_controller_1.default.store);
    router.post("/login", store_controller_1.default.login);
    router.get("", authToken_1.default, store_controller_1.default.list);
    router.get("/:id", authToken_1.default, store_controller_1.default.index);
    router.patch("/:id", authToken_1.default, store_controller_1.default.update);
    router.delete("/:id", authToken_1.default, store_controller_1.default.delete);
    router.get("/orders/:id", store_controller_1.default.indexOrders);
    return router;
};
exports.storeRouter = storeRouter;
