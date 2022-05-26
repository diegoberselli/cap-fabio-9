import { IProduct } from "../products";
import { IProductCd } from "../CD";

export interface IProductDepotCDCreate {
    product_id: string;
    cd_id: string;
    quantity: number;
}

export interface IProductDepotCD {
    id: string;
    product: IProduct;
    cd: IProductCd;
    quantity: number;
}

export interface IProductCDUpdate {
    id: string;
    product_id: string;
    cd_id: string;
    quantity: number;
}