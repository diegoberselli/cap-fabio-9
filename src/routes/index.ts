import { Express } from "express";
import { productRouter } from "./product.routes";


export const appRoutes = (app: Express) => {

    app.use('/products', productRouter());
    

}