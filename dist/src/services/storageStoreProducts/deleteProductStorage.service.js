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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const productRegistrationStorage_entity_1 = require("../../entities/productRegistrationStorage.entity");
const AppError_1 = require("../../errors/AppError");
class DeleteProductStorageService {
    static execute(id_product_storage) {
        return __awaiter(this, void 0, void 0, function* () {
            const productRegistrationRepository = data_source_1.AppDataSource.getRepository(productRegistrationStorage_entity_1.ProductRegistrationStorage);
            const allProductRegistration = yield productRegistrationRepository.find();
            const productRegistration = allProductRegistration.find((item) => item.id === id_product_storage);
            if (!productRegistration) {
                throw new AppError_1.AppError(400, "Invalid identifier");
            }
            yield productRegistrationRepository.delete(productRegistration.id);
            return productRegistration;
        });
    }
}
exports.default = DeleteProductStorageService;
