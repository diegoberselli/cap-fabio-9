export interface IStorageStoreProduct {
  storage_quantity: number;
}
export interface IStorageStoreProductId {
  id: string;
}
export interface IUpdateStorateStoreProductUpdate {
  id: string;
  storage_quantity: number;
}

export interface IProductRegistration {
  id: string;
  quantity: number;
  price: number;
}

export interface IProductRegistrationArray {
  products: IProductRegistration[];
}
