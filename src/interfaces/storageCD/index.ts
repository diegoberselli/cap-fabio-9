export interface IProductCdCreate {
    product_id: string;
    cd_quantity: number;
}

export interface IProductCd extends IProductCdCreate {
    id: string;
}
