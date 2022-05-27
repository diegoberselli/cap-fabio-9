"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.depotCDRouter = void 0;
const express_1 = require("express");
const depotCD_controller_1 = __importDefault(require("../controllers/depotCD.controller"));
const router = (0, express_1.Router)();
const depotCDRouter = () => {
    router.post('/', depotCD_controller_1.default.store);
    router.get('/', depotCD_controller_1.default.list);
    router.get('/:id', depotCD_controller_1.default.index);
    router.patch('/:id', depotCD_controller_1.default.update);
    router.delete('/:id', depotCD_controller_1.default.delete);
    return router;
};
exports.depotCDRouter = depotCDRouter;
