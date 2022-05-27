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
const createProduct_service_1 = __importDefault(require("../services/products/createProduct.service"));
const deleteProduct_service_1 = __importDefault(require("../services/products/deleteProduct.service"));
const indexProduct_service_1 = __importDefault(require("../services/products/indexProduct.service"));
const listProducts_service_1 = __importDefault(require("../services/products/listProducts.service"));
const updateProduct_service_1 = __importDefault(require("../services/products/updateProduct.service"));
class ProductController {
}
exports.default = ProductController;
_a = ProductController;
ProductController.store = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, category, img_URL } = request.body;
    const product = yield createProduct_service_1.default.execute({
        category,
        description,
        name,
        price,
        img_URL,
    });
    return response.status(201).json(product);
});
ProductController.list = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield listProducts_service_1.default.execute();
    return response.json(products);
});
ProductController.index = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const product = yield indexProduct_service_1.default.execute({ id });
    return response.json(product);
});
ProductController.update = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, description, category, img_URL } = request.body;
    const { id } = request.params;
    const updatedProduct = yield updateProduct_service_1.default.execute({
        id,
        name,
        price,
        description,
        category,
        img_URL,
    });
    return response.json(updatedProduct);
});
ProductController.delete = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    yield deleteProduct_service_1.default.execute({ id });
    return response.status(204).json();
});
