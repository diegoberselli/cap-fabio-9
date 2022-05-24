export interface IProductCreate {
  name: string;
  description: string;
  price: number;
  category: string;
  img_URL: string;
}

export interface IProduct extends IProductCreate {
  id: string;
}
