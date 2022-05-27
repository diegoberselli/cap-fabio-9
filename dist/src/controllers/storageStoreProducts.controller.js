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
const createStorageStoreProducts_service_1 = __importDefault(require("../services/storageStoreProducts/createStorageStoreProducts.service"));
const addProductsStorageStore_service_1 = __importDefault(require("../services/storageStoreProducts/addProductsStorageStore.service"));
const updateStorageStore_service_1 = __importDefault(require("../services/storageStoreProducts/updateStorageStore.service"));
const deleteProductStorage_service_1 = __importDefault(require("../services/storageStoreProducts/deleteProductStorage.service"));
class StorageStoreProductController {
    static addProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { products } = req.body;
            const { branchLoggedIn } = req;
            const addedProducts = yield addProductsStorageStore_service_1.default.execute({
                products,
            }, branchLoggedIn);
            res.status(200).json({
                message: "Successfully stored products",
                addedProducts: addedProducts,
            });
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_product_storage, quantity, price } = req.body;
            const { branchLoggedIn } = req;
            const productUpdated = yield updateStorageStore_service_1.default.execute(id_product_storage, quantity, price, branchLoggedIn);
            res.status(200).json({
                message: "Successfully apdated",
                productUpdated: productUpdated,
            });
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_product_storage } = req.params;
            console.log("controllerrrrrrrr");
            console.log(id_product_storage);
            const productDeleted = yield deleteProductStorage_service_1.default.execute(id_product_storage);
            res.status(200).json({
                message: "Product deleted successfully",
                productDeleted: productDeleted,
            });
        });
    }
}
exports.default = StorageStoreProductController;
_a = StorageStoreProductController;
StorageStoreProductController.store = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { storage_quantity } = request.body;
    const storage = yield createStorageStoreProducts_service_1.default.execute({
        storage_quantity,
    });
    return response.status(201).json(storage);
});
