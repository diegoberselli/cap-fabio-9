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
const data_source_1 = require("../../data-source");
const depotCD_entity_1 = __importDefault(require("../../entities/depotCD.entity"));
const product_entity_1 = require("../../entities/product.entity");
const Cd_entity_1 = require("../../entities/Cd.entity");
const AppError_1 = require("../../errors/AppError");
class AddProductService {
}
exports.default = AddProductService;
_a = AddProductService;
AddProductService.execute = ({ product_id, cd_id, quantity }) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
    const cdRepository = data_source_1.AppDataSource.getRepository(Cd_entity_1.Cd);
    const depotCDRepository = data_source_1.AppDataSource.getRepository(depotCD_entity_1.default);
    const product = yield productRepository.findOne({ where: { id: product_id } });
    if (!product) {
        throw new AppError_1.AppError(404, 'Product not found');
    }
    const cd = yield cdRepository.findOne({ where: { id: cd_id } });
    if (!cd) {
        throw new AppError_1.AppError(404, 'Distribution Center not found');
    }
    // const depotAlreadyExists = 
    const depotCDProduct = new depotCD_entity_1.default();
    depotCDProduct.product = product;
    depotCDProduct.quantity = quantity;
    depotCDProduct.cd = cd;
    depotCDRepository.create(depotCDProduct);
    yield depotCDRepository.save(depotCDProduct);
    return depotCDProduct;
});
