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
class UpdateProductService {
}
exports.default = UpdateProductService;
_a = UpdateProductService;
UpdateProductService.execute = ({ description, category, id, name, price, img_URL, }) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
    const products = yield productRepository.find();
    const product = products.find((item) => item.id === id);
    if (!product) {
        throw new AppError_1.AppError(404, "Not found any product with this id");
    }
    price ? (product.price = price) : product.price;
    name ? (product.name = name) : product.name;
    description ? (product.description = description) : product.description;
    category ? (product.category = category) : product.category;
    img_URL ? (product.img_URL = img_URL) : product.img_URL;
    product.update_at = new Date();
    yield productRepository.save(product);
    return product;
});
