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
exports.ProductRegistrationStorage = void 0;
const typeorm_1 = require("typeorm");
const storageStoreProducts_entity_1 = require("./storageStoreProducts.entity");
const product_entity_1 = require("./product.entity");
let ProductRegistrationStorage = class ProductRegistrationStorage {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ProductRegistrationStorage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductRegistrationStorage.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], ProductRegistrationStorage.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProductRegistrationStorage.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProductRegistrationStorage.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, {
        eager: true,
    }),
    __metadata("design:type", product_entity_1.Product)
], ProductRegistrationStorage.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => storageStoreProducts_entity_1.Storage),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", storageStoreProducts_entity_1.Storage)
], ProductRegistrationStorage.prototype, "storage", void 0);
ProductRegistrationStorage = __decorate([
    (0, typeorm_1.Entity)("product_registration_storage")
], ProductRegistrationStorage);
exports.ProductRegistrationStorage = ProductRegistrationStorage;
