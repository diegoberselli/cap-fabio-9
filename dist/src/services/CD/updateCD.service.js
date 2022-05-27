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
const Cd_entity_1 = require("../../entities/Cd.entity");
const AppError_1 = require("../../errors/AppError");
class UpdateCDService {
}
exports.default = UpdateCDService;
_a = UpdateCDService;
UpdateCDService.execute = ({ id, branch, city, street, district, number, zipcode, phone }) => __awaiter(void 0, void 0, void 0, function* () {
    const cdRepository = data_source_1.AppDataSource.getRepository(Cd_entity_1.Cd);
    const cd = yield cdRepository.findOne({ where: { id: id } });
    if (!cd) {
        throw new AppError_1.AppError(404, "Not found any product with this Id");
    }
    branch ? (cd.branch = branch) : cd.branch;
    city ? (cd.city = city) : cd.city;
    street ? (cd.street = street) : cd.street;
    district ? (cd.district = district) : cd.district;
    number ? (cd.number = number) : cd.number;
    zipcode ? (cd.zipcode = zipcode) : cd.zipcode;
    phone ? (cd.phone = phone) : cd.phone;
    yield cdRepository.save(cd);
    return cd;
});
