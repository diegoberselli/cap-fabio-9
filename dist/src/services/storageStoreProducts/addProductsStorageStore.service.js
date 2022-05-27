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
const product_entity_1 = require("../../entities/product.entity");
const storageStoreProducts_entity_1 = require("../../entities/storageStoreProducts.entity");
const productRegistrationStorage_entity_1 = require("../../entities/productRegistrationStorage.entity");
const store_entity_1 = require("../../entities/store.entity");
const data_source_1 = require("../../data-source");
const AppError_1 = require("../../errors/AppError");
class AddProductsStorageStoreService {
    static execute({ products }, branchLoggedIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const storeRepository = data_source_1.AppDataSource.getRepository(store_entity_1.Store);
            const productsRepository = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
            const storageRepository = data_source_1.AppDataSource.getRepository(storageStoreProducts_entity_1.Storage);
            const productRegistrationRepository = data_source_1.AppDataSource.getRepository(productRegistrationStorage_entity_1.ProductRegistrationStorage);
            const productIds = [];
            products.forEach((item) => productIds.push(item.id));
            const store = yield storeRepository.findOne({
                where: { branch: branchLoggedIn },
            });
            const allProducts = yield productsRepository.find();
            for (let i = 0; i < productIds.length; i++) {
                let productIdMatch = false;
                for (let j = 0; j < allProducts.length; j++) {
                    if (productIds[i] === allProducts[j].id) {
                        productIdMatch = true;
                    }
                }
                if (!productIdMatch) {
                    throw new AppError_1.AppError(400, "Incorrect product identifier");
                }
            }
            const storage = yield storageRepository.findOne({
                where: { id: store === null || store === void 0 ? void 0 : store.storage.id },
            });
            if ((storage === null || storage === void 0 ? void 0 : storage.products) != null) {
                for (let i = 0; i < productIds.length; i++) {
                    for (let j = 0; j < (storage === null || storage === void 0 ? void 0 : storage.products.length); j++) {
                        if (productIds[i] === (storage === null || storage === void 0 ? void 0 : storage.products[j].product.id)) {
                            throw new AppError_1.AppError(400, "Some products are already stored");
                        }
                    }
                }
            }
            let returnProducts = [];
            products.forEach((item) => __awaiter(this, void 0, void 0, function* () {
                const productRegistration = new productRegistrationStorage_entity_1.ProductRegistrationStorage();
                productRegistration.storage = storage;
                productRegistration.product = item;
                productRegistration.quantity = item.quantity || 0;
                productRegistration.price = item.price || 0;
                returnProducts.push(productRegistration.product);
                yield productRegistrationRepository.save(productRegistration);
            }));
            // storage!.storage_quantity = productIds.length + storage!.storage_quantity;
            // const amount = products.reduce(
            //   (acc, item) => acc + item.price * item.quantity,
            //   0
            // );
            // storage!.amount = parseFloat((amount + storage!.amount).toFixed(2));
            yield storageRepository.save(storage);
            return returnProducts;
        });
    }
}
exports.default = AddProductsStorageStoreService;
