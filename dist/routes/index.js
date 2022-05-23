"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const store_routes_1 = require("./store.routes");
const appRoutes = (app) => {
    app.use("/store", (0, store_routes_1.storeRouter)());
};
exports.appRoutes = appRoutes;
