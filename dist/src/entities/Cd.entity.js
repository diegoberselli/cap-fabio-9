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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cd = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const depotCD_entity_1 = __importDefault(require("./depotCD.entity"));
let Cd = class Cd {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid"),
    __metadata("design:type", String)
], Cd.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Cd.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 150,
        nullable: false,
    }),
    __metadata("design:type", String)
], Cd.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 150,
        nullable: false,
    }),
    __metadata("design:type", String)
], Cd.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 150,
        nullable: false,
    }),
    __metadata("design:type", String)
], Cd.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 10,
        nullable: false,
    }),
    __metadata("design:type", String)
], Cd.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 10,
        nullable: false,
    }),
    __metadata("design:type", String)
], Cd.prototype, "zipcode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 20,
        nullable: false,
    }),
    __metadata("design:type", String)
], Cd.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => depotCD_entity_1.default, (depotCD) => depotCD.cd),
    __metadata("design:type", Array)
], Cd.prototype, "products", void 0);
Cd = __decorate([
    (0, typeorm_1.Entity)("cd"),
    __metadata("design:paramtypes", [])
], Cd);
exports.Cd = Cd;
