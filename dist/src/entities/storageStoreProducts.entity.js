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
exports.Storage = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const productRegistrationStorage_entity_1 = require("./productRegistrationStorage.entity");
let Storage = class Storage {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid"),
    __metadata("design:type", String)
], Storage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => productRegistrationStorage_entity_1.ProductRegistrationStorage, (productRegistrationStorage) => productRegistrationStorage.storage, {
        eager: true,
    }),
    __metadata("design:type", Array)
], Storage.prototype, "products", void 0);
Storage = __decorate([
    (0, typeorm_1.Entity)("storage"),
    __metadata("design:paramtypes", [])
], Storage);
exports.Storage = Storage;
