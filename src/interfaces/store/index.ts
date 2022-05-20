export interface IStore {
  id: string;
  branch: string;
  city: string;
  street: string;
  district: string;
  number: string;
  zipCode: string;
  phone: string;
}

export interface IStoreCreate {
  branch: string;
  city: string;
  street: string;
  district: string;
  number: string;
  zipCode: string;
  phone: string;
}

export interface IStoreId {
  id: string;
}
