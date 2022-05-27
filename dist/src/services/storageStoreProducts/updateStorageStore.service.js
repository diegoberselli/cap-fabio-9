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
const store_entity_1 = require("../../entities/store.entity");
const storageStoreProducts_entity_1 = require("../../entities/storageStoreProducts.entity");
const data_source_1 = require("../../data-source");
const productRegistrationStorage_entity_1 = require("../../entities/productRegistrationStorage.entity");
class UpdateStorageStoreService {
    static execute(id_product_storage, quantity, price, branchLoggedIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const storeRepository = data_source_1.AppDataSource.getRepository(store_entity_1.Store);
            const storageRepository = data_source_1.AppDataSource.getRepository(storageStoreProducts_entity_1.Storage);
            const productRegistrationRepository = data_source_1.AppDataSource.getRepository(productRegistrationStorage_entity_1.ProductRegistrationStorage);
            const store = yield storeRepository.findOne({
                where: { branch: branchLoggedIn },
            });
            const storage = yield storageRepository.findOne({
                where: { id: store === null || store === void 0 ? void 0 : store.storage.id },
            });
            const productRegistration = yield productRegistrationRepository.findOne({
                where: { id: id_product_storage },
            });
            ////////////////////////////////////////////
            // let amountDataBase =
            //   productRegistration!.quantity * productRegistration!.price;
            // storage!.amount = storage!.amount - amountDataBase;
            // await storageRepository.save(<any>storage);
            // await productRegistrationRepository.save(<any>productRegistration);
            // let newAmountDataBase = quantity * price;
            // storage!.amount = storage!.amount + newAmountDataBase;
            // await storageRepository.save(<any>storage);
            // await productRegistrationRepository.save(<any>productRegistration);
            ////////////////////////////////////////////
            productRegistration.price = price;
            productRegistration.quantity = quantity;
            productRegistration.updated_at = new Date();
            yield productRegistrationRepository.save(productRegistration);
            return productRegistration;
        });
    }
}
exports.default = UpdateStorageStoreService;
// const store = await storeRepository.findOne({
// where: { branch: branchLoggedIn },
// });
//
// const storage = await storageRepository.findOne({
// where: { id: store?.storage.id },
// });
// Uma loja não fazer alterações no estoque de outra loja
// store ( coluna storageId ) 1:1 storage
// storage 1:N productRegistration ( coluna storageId )
// console.log("baaaaaaaaaaaaa");
// console.log(productRegistration?.storage.id);
// console.log("separaaaa");
// console.log(store?.storage.id);
// if (storage?.id !== store?.storage.id) {
//   throw new AppError(400, "Você está logado em outra loja");
// }
