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
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const Cd_entity_1 = require("./Cd.entity");
const uuid_1 = require("uuid");
let DepotCD = class DepotCD {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], DepotCD.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cd_entity_1.Cd, { eager: true }),
    __metadata("design:type", Cd_entity_1.Cd)
], DepotCD.prototype, "cd", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, { eager: true }),
    __metadata("design:type", product_entity_1.Product)
], DepotCD.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DepotCD.prototype, "quantity", void 0);
DepotCD = __decorate([
    (0, typeorm_1.Entity)('depotCD'),
    __metadata("design:paramtypes", [])
], DepotCD);
exports.default = DepotCD;
