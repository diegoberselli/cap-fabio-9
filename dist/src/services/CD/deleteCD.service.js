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
const AppError_1 = require("../../errors/AppError");
const Cd_entity_1 = require("../../entities/Cd.entity");
class DeleteCDService {
}
exports.default = DeleteCDService;
_a = DeleteCDService;
DeleteCDService.execute = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const cdRepository = data_source_1.AppDataSource.getRepository(Cd_entity_1.Cd);
    const cdProduct = yield cdRepository.findOne({ where: { id } });
    if (!cdProduct) {
        throw new AppError_1.AppError(404, 'Not found any product with this id on CD');
    }
    return cdRepository.delete(id);
});
