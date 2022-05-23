import { Express } from "express";

import { productRouter } from "./product.routes";
import { storeRouter } from "./store.routes";


export const appRoutes = (app: Express) => {

    app.use('/products', productRouter());
    app.use("/store", storeRouter());
    

}
