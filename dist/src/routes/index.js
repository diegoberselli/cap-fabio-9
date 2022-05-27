"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const storage_routes_1 = require("./storage.routes");
const product_routes_1 = require("./product.routes");
const store_routes_1 = require("./store.routes");
const order_routes_1 = require("./order.routes");
const CD_routes_1 = require("./CD.routes");
const depotCD_routes_1 = require("./depotCD.routes");
const appRoutes = (app) => {
    app.use("/store", (0, store_routes_1.storeRouter)());
    app.use("/storage", (0, storage_routes_1.storageRouter)());
    app.use("/order", (0, order_routes_1.orderRouter)());
    app.use("/products", (0, product_routes_1.productRouter)());
    app.use("/cd", (0, CD_routes_1.CDRouter)());
    app.use("/depot_cd", (0, depotCD_routes_1.depotCDRouter)());
};
exports.appRoutes = appRoutes;
