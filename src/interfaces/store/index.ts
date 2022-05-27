export interface IStore {
  id: string;
  branch: string;
  city: string;
  street: string;
  district: string;
  number: string;
  zipcode: string;
  phone: string;
  state: string;
}

export interface IStoreCreate {
  branch: string;
  city: string;
  street: string;
  district: string;
  number: string;
  zipcode: string;
  phone: string;
  password: string;
  state: string;
}

export interface IStoreId {
  id: string;
}
