"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRouter = void 0;
const express_1 = require("express");
const store_controller_1 = __importDefault(require("../controllers/store.controller"));
const router = (0, express_1.Router)();
const storeRouter = () => {
    router.post("", store_controller_1.default.store);
    router.get("", store_controller_1.default.list);
    router.get("/:id", store_controller_1.default.index);
    router.patch("/:id", store_controller_1.default.update);
    router.delete("/:id", store_controller_1.default.delete);
    return router;
};
exports.storeRouter = storeRouter;
