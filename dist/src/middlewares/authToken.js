"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        throw new AppError_1.AppError(401, "Pending authorization token");
    }
    const headerData = authorization.split(" ");
    const [, token] = headerData;
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new AppError_1.AppError(406, "Token invalid");
        }
        req.branchLoggedIn = decoded.branch;
        next();
    });
};
exports.default = authToken;
