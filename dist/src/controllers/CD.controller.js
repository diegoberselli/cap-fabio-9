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
const createCD_service_1 = __importDefault(require("../services/CD/createCD.service"));
const deleteCD_service_1 = __importDefault(require("../services/CD/deleteCD.service"));
const indexCD_service_1 = __importDefault(require("../services/CD/indexCD.service"));
const listCD_service_1 = __importDefault(require("../services/CD/listCD.service"));
const updateCD_service_1 = __importDefault(require("../services/CD/updateCD.service"));
class CDController {
}
exports.default = CDController;
_a = CDController;
CDController.store = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { branch, city, street, district, number, zipcode, phone } = request.body;
    const cdProduct = yield createCD_service_1.default.execute({ branch, city, street, district, number, zipcode, phone });
    return response.status(201).json(cdProduct);
});
CDController.list = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const cdProducts = yield listCD_service_1.default.execute();
    return response.json(cdProducts);
});
CDController.index = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const cdProduct = yield indexCD_service_1.default.execute({ id });
    return response.json(cdProduct);
});
CDController.update = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { branch, city, street, district, number, zipcode, phone } = request.body;
    const updatedCDProduct = yield updateCD_service_1.default.execute({ id, branch, city, street, district, number, zipcode, phone });
    return response.json(updatedCDProduct);
});
CDController.delete = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const deletedCDProduct = yield deleteCD_service_1.default.execute({ id });
    return response.status(204).json();
});
;
