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
const store_entity_1 = require("../../entities/store.entity");
const AppError_1 = require("../../errors/AppError");
class CreateStoreService {
}
exports.default = CreateStoreService;
_a = CreateStoreService;
CreateStoreService.execute = ({ branch, city, street, district, number, zipcode, phone, }) => __awaiter(void 0, void 0, void 0, function* () {
    const storeRepository = data_source_1.AppDataSource.getRepository(store_entity_1.Store);
    const storeAlreadyExists = yield storeRepository.findOne({
        where: { branch },
    });
    if (storeAlreadyExists) {
        throw new AppError_1.AppError(409, "This branch of store already exists in your database");
    }
    const store = new store_entity_1.Store();
    store.branch = branch;
    store.city = city;
    store.street = street;
    store.district = district;
    store.number = number;
    store.zipcode = zipcode;
    store.phone = phone;
    storeRepository.create(store);
    yield storeRepository.save(store);
    return store;
});
