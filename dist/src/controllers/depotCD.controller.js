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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const addProduct_service_1 = __importDefault(require("../services/depotCD/addProduct.service"));
const deleteProductDepotCD_service_1 = __importDefault(require("../services/depotCD/deleteProductDepotCD.service"));
const indexDepotCDProduct_service_1 = __importDefault(require("../services/depotCD/indexDepotCDProduct.service"));
const listDepotCD_service_1 = __importDefault(require("../services/depotCD/listDepotCD.service"));
const updateDepotCDProduct_service_1 = __importDefault(require("../services/depotCD/updateDepotCDProduct.service"));
class DepotCDController {
}
exports.default = DepotCDController;
_a = DepotCDController;
DepotCDController.store = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_id, cd_id, quantity } = request.body;
    const cdProduct = yield addProduct_service_1.default.execute({ product_id, cd_id, quantity });
    return response.status(201).json(cdProduct);
});
DepotCDController.list = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const cdProducts = yield listDepotCD_service_1.default.execute();
    return response.json(cdProducts);
});
DepotCDController.index = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const cdProduct = yield indexDepotCDProduct_service_1.default.execute({ id });
    return response.json(cdProduct);
});
DepotCDController.update = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { product_id, cd_id, quantity } = request.body;
    const updatedCDProduct = yield updateDepotCDProduct_service_1.default.execute({ id, product_id, cd_id, quantity });
    return response.json(updatedCDProduct);
});
DepotCDController.delete = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const deletedCDProduct = yield deleteProductDepotCD_service_1.default.execute({ id });
    return response.status(204).json();
});
;
