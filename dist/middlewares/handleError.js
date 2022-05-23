"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const AppError_1 = require("../errors/AppError");
const handleError = (err, req, res, _) => {
    if (err instanceof AppError_1.AppError) {
        return res
            .status(err.statusCode)
            .json({ status: "Error", message: err.message });
    }
    return res
        .status(500)
        .json({ status: "Error", message: "Internal server error!" });
};
exports.handleError = handleError;
