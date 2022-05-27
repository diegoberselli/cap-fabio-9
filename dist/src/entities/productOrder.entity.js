"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrder = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const order_entity_1 = require("./order.entity");
const product_entity_1 = require("./product.entity");
let ProductOrder = class ProductOrder {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid"),
    __metadata("design:type", String)
], ProductOrder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    __metadata("design:type", order_entity_1.Order)
], ProductOrder.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, {
        eager: true,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", product_entity_1.Product)
], ProductOrder.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], ProductOrder.prototype, "price_product", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductOrder.prototype, "quantity_product_order", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductOrder.prototype, "directed_from_id", void 0);
ProductOrder = __decorate([
    (0, typeorm_1.Entity)("productOrder"),
    __metadata("design:paramtypes", [])
], ProductOrder);
exports.ProductOrder = ProductOrder;
