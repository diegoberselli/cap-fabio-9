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
exports.Store = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const storageStoreProducts_entity_1 = require("./storageStoreProducts.entity");
const order_entity_1 = require("./order.entity");
let Store = class Store {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid"),
    __metadata("design:type", String)
], Store.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Store.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 150,
        nullable: false,
    }),
    __metadata("design:type", String)
], Store.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 150,
        nullable: false,
    }),
    __metadata("design:type", String)
], Store.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 150,
        nullable: false,
    }),
    __metadata("design:type", String)
], Store.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 20,
        nullable: false,
    }),
    __metadata("design:type", String)
], Store.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 10,
        nullable: false,
    }),
    __metadata("design:type", String)
], Store.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 10,
        nullable: false,
    }),
    __metadata("design:type", String)
], Store.prototype, "zipcode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 20,
        nullable: false,
    }),
    __metadata("design:type", String)
], Store.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Store.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Store.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Store.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => storageStoreProducts_entity_1.Storage, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", storageStoreProducts_entity_1.Storage)
], Store.prototype, "storage", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.store),
    __metadata("design:type", Array)
], Store.prototype, "orders", void 0);
Store = __decorate([
    (0, typeorm_1.Entity)("store"),
    __metadata("design:paramtypes", [])
], Store);
exports.Store = Store;
