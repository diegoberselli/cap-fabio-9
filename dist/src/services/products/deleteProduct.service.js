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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const AppError_1 = require("../../errors/AppError");
const product_entity_1 = require("../../entities/product.entity");
class DeleteProductService {
}
exports.default = DeleteProductService;
_a = DeleteProductService;
DeleteProductService.execute = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
    const products = yield productRepository.find();
    const product = products.find((item) => item.id === id);
    if (!product) {
        throw new AppError_1.AppError(404, "Not found any product with this id");
    }
    return productRepository.delete(id);
});
