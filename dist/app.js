"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const handleError_1 = require("./middlewares/handleError");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(handleError_1.handleError);
(0, routes_1.appRoutes)(app);
app.get("/", (request, response) => {
    response.send("Hello World");
    console.log('aqui', process.env.NODE_ENV);
});
exports.default = app;
