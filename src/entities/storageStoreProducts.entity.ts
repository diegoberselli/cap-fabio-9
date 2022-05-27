import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { ProductRegistrationStorage } from "./productRegistrationStorage.entity";

@Entity("storage")
export class Storage {
  @PrimaryColumn("uuid")
  readonly id: string;

  @OneToMany(
    () => ProductRegistrationStorage,
    (productRegistrationStorage) => productRegistrationStorage.storage,
    {
      eager: true,
    }
  )
  products: ProductRegistrationStorage[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
