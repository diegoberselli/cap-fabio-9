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
const store_entity_1 = require("../../entities/store.entity");
const storageStoreProducts_entity_1 = require("../../entities/storageStoreProducts.entity");
const AppError_1 = require("../../errors/AppError");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class CreateStoreService {
}
exports.default = CreateStoreService;
_a = CreateStoreService;
CreateStoreService.execute = ({ branch, city, street, district, number, zipcode, phone, password, state, }) => __awaiter(void 0, void 0, void 0, function* () {
    const storeRepository = data_source_1.AppDataSource.getRepository(store_entity_1.Store);
    const storeAlreadyExists = yield storeRepository.findOne({
        where: { branch },
    });
    if (storeAlreadyExists) {
        throw new AppError_1.AppError(409, "This branch of store already exists in your database");
    }
    const storageRepository = data_source_1.AppDataSource.getRepository(storageStoreProducts_entity_1.Storage);
    const storage = new storageStoreProducts_entity_1.Storage();
    yield storageRepository.save(storage);
    const store = new store_entity_1.Store();
    store.branch = branch;
    store.city = city;
    store.street = street;
    store.district = district;
    store.state = state;
    store.number = number;
    store.zipcode = zipcode;
    store.phone = phone;
    store.password = bcryptjs_1.default.hashSync(password, 8);
    store.created_at = new Date();
    store.update_at = new Date();
    store.storage = storage;
    yield storeRepository.save(store);
    return store;
});
