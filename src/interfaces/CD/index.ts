export interface IProductCdCreate {
  branch: string;
  city: string;
  street: string;
  district: string;
  number: string;
  zipcode: string;
  phone: string;
}

export interface IProductCd extends IProductCdCreate {
  
  id: string;

}


