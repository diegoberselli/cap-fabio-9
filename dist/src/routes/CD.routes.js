"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDRouter = void 0;
const express_1 = require("express");
const CD_controller_1 = __importDefault(require("../controllers/CD.controller"));
const router = (0, express_1.Router)();
const CDRouter = () => {
    router.post('', CD_controller_1.default.store);
    router.get('', CD_controller_1.default.list);
    router.get('/:id', CD_controller_1.default.index);
    router.patch('/:id', CD_controller_1.default.update);
    router.delete('/:id', CD_controller_1.default.delete);
    return router;
};
exports.CDRouter = CDRouter;
