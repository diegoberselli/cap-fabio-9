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
Object.defineProperty(exports, "__esModule", { value: true });
const order_entity_1 = require("../../entities/order.entity");
const AppError_1 = require("../../errors/AppError");
const data_source_1 = require("../../data-source");
const productOrder_entity_1 = require("../../entities/productOrder.entity");
const product_entity_1 = require("../../entities/product.entity");
const typeorm_1 = require("typeorm");
const depotCD_entity_1 = __importDefault(require("../../entities/depotCD.entity"));
const storageStoreProducts_entity_1 = require("../../entities/storageStoreProducts.entity");
const productRegistrationStorage_entity_1 = require("../../entities/productRegistrationStorage.entity");
class CreateOrderService {
    static execute({ storeId, productArray, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderRepository = data_source_1.AppDataSource.getRepository(order_entity_1.Order);
            const productsRepository = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
            const productOrderRepository = data_source_1.AppDataSource.getRepository(productOrder_entity_1.ProductOrder);
            const depotCDRepository = data_source_1.AppDataSource.getRepository(depotCD_entity_1.default);
            const storageRepository = data_source_1.AppDataSource.getRepository(storageStoreProducts_entity_1.Storage);
            const storageRegistrationRepository = data_source_1.AppDataSource.getRepository(productRegistrationStorage_entity_1.ProductRegistrationStorage);
            const productIds = [];
            productArray.forEach((product) => {
                productIds.push(product.id);
            });
            const products = yield productsRepository.findBy({ id: (0, typeorm_1.In)(productIds) });
            if (!products[products.length - 1]) {
                throw new AppError_1.AppError(404, "Invalid list of ids");
            }
            const amount = productArray.reduce((acc, item) => acc + item.price_product * item.quantity_product_order, 0);
            const order = new order_entity_1.Order();
            order.storeId = storeId;
            order.created_at = new Date();
            order.update_at = new Date();
            order.amount = amount;
            order.status = status;
            orderRepository.create(order);
            yield orderRepository.save(order);
            productArray.forEach((product) => __awaiter(this, void 0, void 0, function* () {
                if (product) {
                    const orderProduct = productOrderRepository.create({
                        order: order,
                        product: product,
                        price_product: product.price_product,
                        quantity_product_order: product.quantity_product_order,
                        directed_from_id: product.directed_from_id,
                    });
                    const depotCDOfDirectedFrom = yield depotCDRepository.findOne({
                        where: { id: product.directed_from_id },
                    });
                    if (depotCDOfDirectedFrom) {
                        depotCDOfDirectedFrom.quantity =
                            depotCDOfDirectedFrom.quantity - product.quantity_product_order;
                        yield depotCDRepository.save(depotCDOfDirectedFrom);
                    }
                    else {
                        const storageOfDirectedFrom = yield storageRepository.findOne({
                            where: { id: product.directed_from_id },
                        });
                        if (storageOfDirectedFrom) {
                            storageOfDirectedFrom.products.forEach((productStore) => __awaiter(this, void 0, void 0, function* () {
                                if (productStore.product.id === product.id) {
                                    const storageRegistration = yield storageRegistrationRepository.findOne({
                                        where: { id: productStore.id },
                                    });
                                    if (storageRegistration) {
                                        storageRegistration.quantity =
                                            storageRegistration.quantity -
                                                product.quantity_product_order;
                                        yield storageRegistrationRepository.save(storageRegistration);
                                    }
                                }
                            }));
                            yield storageRepository.save(storageOfDirectedFrom);
                        }
                    }
                    yield productOrderRepository.save(orderProduct);
                }
            }));
            return order;
        });
    }
}
exports.default = CreateOrderService;
