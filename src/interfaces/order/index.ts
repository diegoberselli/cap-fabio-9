export interface IOrderCreate {
  storeId: string;
  status: string;
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

export interface IOrderObjectStatus {
  status: string;
}

export interface IOrderObjectUpdate {
  id: string;
  status: string;
}
