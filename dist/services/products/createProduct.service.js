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
const product_entity_1 = require("../../entities/product.entity");
const AppError_1 = require("../../errors/AppError");
class CreateProductService {
}
exports.default = CreateProductService;
_a = CreateProductService;
CreateProductService.execute = ({ name, description, price, category }) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
    console.log("service", productRepository);
    const productAlreadyExists = yield productRepository.findOne({ where: { name } });
    if (productAlreadyExists) {
        throw new AppError_1.AppError(409, 'Product already Exists');
    }
    const product = new product_entity_1.Product();
    product.name = name;
    product.price = price;
    product.description = description;
    product.category = category;
    productRepository.create(product);
    yield productRepository.save(product);
    return product;
});
