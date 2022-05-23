export interface IProductCreate {
    name: string;
    description: string;
    price: number;
    category: string;
}

export interface IProduct extends IProductCreate {
    id: string;
}