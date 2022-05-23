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
class UpdateStoreService {
}
exports.default = UpdateStoreService;
_a = UpdateStoreService;
UpdateStoreService.execute = ({ id, branch, city, street, district, number, zipcode, phone, }) => __awaiter(void 0, void 0, void 0, function* () {
    const storeRepository = data_source_1.AppDataSource.getRepository(store_entity_1.Store);
    const store = yield storeRepository.findOne({ where: { id: id } });
    if (!store) {
        throw new AppError_1.AppError(404, "Not Found any store with this id");
    }
    branch ? (store.branch = branch) : store.branch;
    city ? (store.city = city) : store.city;
    street ? (store.street = street) : store.street;
    district ? (store.district = district) : store.district;
    number ? (store.number = number) : store.number;
    zipcode ? (store.zipcode = zipcode) : store.zipcode;
    phone ? (store.phone = phone) : store.phone;
    return storeRepository.save(store);
});
