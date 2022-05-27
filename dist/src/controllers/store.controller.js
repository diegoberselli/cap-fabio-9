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
const createStore_service_1 = __importDefault(require("../services/store/createStore.service"));
const indexStore_service_1 = __importDefault(require("../services/store/indexStore.service"));
const updateStore_service_1 = __importDefault(require("../services/store/updateStore.service"));
const listStore_service_1 = __importDefault(require("../services/store/listStore.service"));
const deleteStore_service_1 = __importDefault(require("../services/store/deleteStore.service"));
const loginStore_service_1 = require("../services/store/loginStore.service");
const indexOrdersStore_service_1 = __importDefault(require("../services/store/indexOrdersStore.service"));
class StoreController {
}
exports.default = StoreController;
_a = StoreController;
StoreController.store = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { branch, city, street, district, number, zipcode, phone, password, state, } = request.body;
    const store = yield createStore_service_1.default.execute({
        branch,
        city,
        street,
        district,
        number,
        zipcode,
        phone,
        password,
        state,
    });
    return response.status(201).json(store);
});
StoreController.list = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const stores = yield listStore_service_1.default.execute();
    return response.send(stores);
});
StoreController.indexOrders = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const store = yield indexOrdersStore_service_1.default.execute({ id });
    return response.status(200).json(store);
});
StoreController.index = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const store = yield indexStore_service_1.default.execute({ id });
    return response.status(200).json(store);
});
StoreController.update = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { branch, city, street, district, number, zipcode, phone, state } = request.body;
    const { id } = request.params;
    const updatedStore = yield updateStore_service_1.default.execute({
        id,
        branch,
        city,
        street,
        district,
        number,
        zipcode,
        phone,
        state,
    });
    return response.status(200).json(updatedStore);
});
StoreController.delete = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    yield deleteStore_service_1.default.execute({ id });
    return response.status(204).json();
});
StoreController.login = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { branch, password } = request.body;
    const token = yield loginStore_service_1.LoginStoreService.execute(branch, password);
    return response.status(200).json({ token: token });
});
