export interface IStore {
  id: string;
  branch: string;
  city: string;
  street: string;
  district: string;
  number: string;
  zipcode: string;
  phone: string;
}

export interface IStoreCreate {
  branch: string;
  city: string;
  street: string;
  district: string;
  number: string;
  zipcode: string;
  phone: string;
}

export interface IStoreId {
  id: string;
}
