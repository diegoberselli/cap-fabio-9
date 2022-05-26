import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { ProductRegistrationStorage } from "./productRegistrationStorage";

@Entity("storage")
export class Storage {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  storage_quantity: number;

  @Column()
  amount: number;

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

// @Column({
//   length: 50,
// })
// store_id: string;

// @Column({
//   length: 50,
// })
// product_id: string;
