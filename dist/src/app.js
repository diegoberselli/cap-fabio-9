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
(0, routes_1.appRoutes)(app);
app.use(handleError_1.handleError);
app.get("/", (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: "Ok, running",
        timestamp: Date.now(),
    };
    res.send(healthcheck);
});
exports.default = app;
