export interface IOrderCreate {
  storeId: string;
  productArray: IOrder[];
}

export interface IOrder {
  id: string;
  quantity: number;
  price_product: number;
  quantity_product_order: number;
  directed_from_id: string;
}

export interface IOrderObjectId {
  id: string;
}
