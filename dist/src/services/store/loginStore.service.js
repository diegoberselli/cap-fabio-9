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
exports.LoginStoreService = void 0;
const data_source_1 = require("../../data-source");
const store_entity_1 = require("../../entities/store.entity");
const AppError_1 = require("../../errors/AppError");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginStoreService {
    static execute(branch, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const storeRepository = data_source_1.AppDataSource.getRepository(store_entity_1.Store);
            const store = yield storeRepository.findOne({ where: { branch } });
            if (!store) {
                throw new AppError_1.AppError(400, "Branch or password invalid");
            }
            const checkPassworld = bcryptjs_1.default.compareSync(password, store.password);
            if (!checkPassworld) {
                throw new AppError_1.AppError(400, "Branch or password invalid");
            }
            const token = jsonwebtoken_1.default.sign({ branch: branch }, process.env.SECRET_KEY, { expiresIn: "24h" });
            return token;
        });
    }
}
exports.LoginStoreService = LoginStoreService;
